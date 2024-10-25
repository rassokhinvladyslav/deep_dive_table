import { Box, InputAdornment } from '@mui/material';
import { Text } from '@shared';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars-2';
import {
  ListContainer,
  SearchBox,
  Wrapper,
  StyledTextField,
  ListHeader,
} from './KPISelect.styles';
import { SelectItem } from './SelectItem';
import SearchIcon from '@assets/mc_search.svg';
import { useDeepDiveContext } from '../../../lib';
import { KPIS_LIST } from '@lib/KPIS';

interface KPISelectProps {
  selected: string[];
  handleChange: (value: string) => void;
}

export const KPISelect = React.memo<KPISelectProps>(
  ({ selected, handleChange }) => {
    const [search, setSearch] = React.useState('');
    const { kpi_options, attributionProps } = useDeepDiveContext();

    const handleChangeSearch = React.useCallback(e => {
      setSearch(e.target.value);
    }, []);

    const options = attributionProps ? [] : kpi_options;

    return (
      <Wrapper>
        <SearchBox>
          <StyledTextField
            fullWidth
            value={search}
            onChange={handleChangeSearch}
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </SearchBox>
        <Scrollbars height={528} width={442}>
          {options.filter(filterGroups(search)).map(({ name, values }) => (
            <Box key={name}>
              <ListHeader>
                <Text variant="list_title_header" colorGrade={600}>
                  {name}
                </Text>
              </ListHeader>
              <ListContainer>
                {values.filter(filterValues(search)).map(value => (
                  <SelectItem
                    key={value}
                    kpi={value}
                    selected={selected.includes(value)}
                    handleChange={handleChange}
                  />
                ))}
              </ListContainer>
            </Box>
          ))}
        </Scrollbars>
      </Wrapper>
    );
  },
);

const filterValues = (search: string) => (value: string) => {
  const label = KPIS_LIST[value].title.toLowerCase();
  return label.includes(search.toLowerCase()) || value.includes(search);
};

const filterGroups =
  (search: string) => (group: { name: string; values: string[] }) =>
    group.values.some(filterValues(search));
