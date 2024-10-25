import React from 'react';
import { ActionsContainer, Wrapper, Container } from './Header.styles';
import { TabsTitle } from './TabsTitle';
import { useDeepDiveContext } from '../../lib';
import { Text, Search, useDebouncedSearch } from '@shared';
import { Settings } from './Settings';
import { ExportButton } from '@shared/ExportButton';
import {
  useGridApiContext,
  useGridApiEventHandler,
} from '@mui/x-data-grid-premium';
import { useExportProps } from '../hooks';
import { Filter } from './Filter';
import { Breadcrumbs } from '../Breadcrumbs';
import { IconButton } from '@mui/material';
import Mc_show_menu from '@assets/mc_show_menu.svg';
import { Dimensions } from '@features/DeepDiveTable/Table/Header/Dimensions';

export const Header = React.memo(() => {
  const apiRef = useGridApiContext();
  const {
    attributionProps,
    rowSearch,
    setRowSearch,
    title,
    breadcrumbs,
    loading,
    disableActions,
    slots: { MoreButton, Chart, Title, borderBottom },
    fullScreen,
    toggleFullScreen,
    handleScroll,
  } = useDeepDiveContext();
  const { search, setSearch } = useDebouncedSearch({
    action: setRowSearch,
    initialValue: rowSearch,
    nullOnEmpty: false,
  });
  const exportProps = useExportProps();
  const [activeTab, setActiveTab] = React.useState<0 | 1>(0);

  const handleChangeTab = React.useCallback(
    (tab: 0 | 1) => () => {
      setActiveTab(tab);
    },
    [],
  );

  useGridApiEventHandler(apiRef, 'rowsScroll', handleScroll);

  return (
    <Wrapper>
      <Container
        isFullScreen={fullScreen}
        withTabs={!!attributionProps}
        buttomBorder={borderBottom}
      >
        <ActionsContainer>
          {fullScreen && (
            <IconButton
              onClick={toggleFullScreen}
              sx={{ '&:hover': { backgroundColor: 'transparent' } }}
            >
              <Mc_show_menu />
            </IconButton>
          )}
          {!!attributionProps ? (
            <TabsTitle
              activeTab={activeTab}
              handleChangeTab={handleChangeTab}
              handleFullScreen={toggleFullScreen}
              isFullScreen={fullScreen}
            />
          ) : (
            <>
              {title && <Text variant={'h4'}>{title}</Text>}
              {Title && Title}
            </>
          )}
        </ActionsContainer>
        <ActionsContainer>
          <ExportButton
            {...exportProps}
            apiRef={apiRef}
            disabled={loading || disableActions}
          />
          <Search
            rowsSearch={search}
            setRowsSearch={setSearch}
            disabled={loading || disableActions}
          />
          <Filter />
          <Settings />
          {!!MoreButton && MoreButton}
        </ActionsContainer>
      </Container>
      {Chart && Chart}
      <Dimensions />
      {breadcrumbs && <Breadcrumbs />}
    </Wrapper>
  );
});
