import { InfoPopup, useAppSelector } from '@shared';
import { Checkbox } from '@shared/Checkbox';
import React from 'react';
import { SelectItemContainer } from './KPISelect.styles';
import { popups } from './constants';
import { Box } from '@mui/material';
import {
  COMPANY_FEATURES,
  selectCurrentActiveFeatures,
} from '@entities/Company';
import { KPIS_LIST } from '@lib/KPIS';
import { PROFITABILITY_KPIS } from '@lib/constants';

interface SelectItemProps {
  kpi: string;
  selected: boolean;
  handleChange: (value: string) => void;
}

export const SelectItem = React.memo<SelectItemProps>(
  ({ kpi, selected, handleChange }) => {
    const activeFeatures = useAppSelector(selectCurrentActiveFeatures);

    const disabled =
      !activeFeatures.includes(COMPANY_FEATURES.POAS) &&
      PROFITABILITY_KPIS.includes(kpi);

    const handleCheck = React.useCallback(() => {
      handleChange(kpi);
    }, [handleChange, kpi]);

    return (
      <SelectItemContainer sx={{ ...(disabled && { opacity: '0.5' }) }}>
        <Checkbox
          checked={selected}
          onChange={handleCheck}
          label={KPIS_LIST[kpi].title}
          disabled={disabled}
        />
        <Box
          sx={{
            marginLeft: '8px',
          }}
        >
          {popups[kpi] && (
            <InfoPopup
              title={popups[kpi].title}
              description={popups[kpi].description}
              link={popups[kpi].link}
              position="bottom"
            />
          )}
        </Box>
      </SelectItemContainer>
    );
  },
);
