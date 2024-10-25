import { TableKPI, useDeepDiveContext } from '../../lib';
import { GridRowModel } from '@mui/x-data-grid-premium';

const reduceFn = (acc, kpi: TableKPI) => ({
  ...acc,
  [kpi.kpi_name]: {
    kpi: kpi.kpi_value,
    avg: kpi.compare_kpi_value,
  },
  [`${kpi.kpi_name}_compare`]: kpi.compare_kpi_value,
});

export const useRows = () => {
  const { data, totals, rowSearch } = useDeepDiveContext();

  if (!data) {
    return {
      rows: [],
      pinnedRows: {
        top: [],
        bottom: [],
      },
    };
  }

  const totalsRow = totals
    ? {
        name: 'Total',
        secondary_name: '',
        id: -2,
        ...totals.reduce(reduceFn, {}),
      }
    : null;

  const rows = data.filter(filterRows(rowSearch)).map(({ kpis, ...rest }) => ({
    ...rest,
    ...kpis.reduce(reduceFn, {}),
  }));

  const pinnedRows: { top: GridRowModel[]; bottom: GridRowModel[] } = {
    top: [],
    bottom: rows.length > 0 && totalsRow ? [totalsRow] : [],
  };

  return { rows, pinnedRows };
};

const filterRows = (rowSearch: string) => (row: { name: string | null }) =>
  row.name?.toLowerCase().includes(rowSearch.toLowerCase());
