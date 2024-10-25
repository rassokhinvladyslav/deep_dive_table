import { useDeepDiveContext } from '../../lib';
import React from 'react';
import {
  CheckboxRenderer,
  HeadCheckboxRenderer,
  NameHeadRenderer,
  NameRenderer,
  PlusRenderer,
  PlusHeadRenderer,
} from '../renderers';
import { useValueColumns } from './useValueColumns';
import { GridColDef } from '@mui/x-data-grid';

export const useColumns = () => {
  const {
    pinned_kpis,
    dimension_options,
    current_dimension,
    secondary_dimension,
    loading,
    disableActions,
    selectedRows,
    handleSelectRow,
    disableSelection,
    expand_dimension,
  } = useDeepDiveContext();

  const checkboxColumn = React.useMemo(
    () => ({
      disableExport: true,
      disableClickEventBubbling: true,
      headerName: '',
      width: 40,
      minWidth: 40,
      maxWidth: 40,
      sortable: false,
      resizable: false,
      field: 'selected',
      renderCell: CheckboxRenderer({
        loading,
        selectedRows,
        handleSelectRow,
        disableSelection,
      }),
      renderHeader: HeadCheckboxRenderer({
        loading,
        selectedRows,
        handleSelectRow,
      }),
    }),
    [loading, selectedRows, handleSelectRow],
  );

  const nameColumn = React.useMemo(
    () => ({
      field: 'name',
      width: 350,
      minWidth: 210,
      maxWidth: 840,
      sortable: true,
      headerName: expand_dimension
        ? dimension_options[expand_dimension] ?? expand_dimension
        : dimension_options[current_dimension] ?? current_dimension,
      renderHeader: NameHeadRenderer(loading),
      renderCell: NameRenderer({
        selectedRows,
      }),
    }),
    [
      dimension_options,
      current_dimension,
      selectedRows,
      expand_dimension,
      loading,
    ],
  ) as GridColDef;

  const secondaryDimensionColumn = React.useMemo(
    () => ({
      field: 'secondary_name',
      width: 350,
      minWidth: 210,
      maxWidth: 840,
      sortable: true,
      ...(secondary_dimension && {
        headerName:
          dimension_options[secondary_dimension] ?? secondary_dimension,
      }),
      renderHeader: NameHeadRenderer(loading),
      renderCell: NameRenderer({
        selectedRows,
      }),
    }),
    [dimension_options, secondary_dimension, selectedRows, loading],
  ) as GridColDef;

  const plusColumn = React.useMemo(
    () => ({
      disableExport: true,
      field: 'plus',
      width: 20,
      minWidth: 20,
      sortable: false,
      resizable: false,
      renderHeader: () => (
        <PlusHeadRenderer disabled={loading || disableActions} />
      ),
      renderCell: PlusRenderer,
    }),
    [loading, disableActions],
  );

  const valueColumns = useValueColumns();

  const pinned = secondary_dimension
    ? ['secondary_name', ...pinned_kpis]
    : pinned_kpis;

  const pinnedColumns = {
    left: ['selected', 'name', ...pinned],
    right: ['plus'],
  };

  return {
    columns: [
      checkboxColumn,
      nameColumn,
      ...(secondary_dimension ? [secondaryDimensionColumn] : []),
      ...valueColumns,
      plusColumn,
    ],
    pinnedColumns,
  };
};
