import React from 'react';
import { TableValueCellRenderer } from '@shared/TableValueCellRenderer';
import { GridValidRowModel } from '@mui/x-data-grid-pro';
import { KPIS_LIST } from '@lib/KPIS';

export const ValueRenderer: React.FC<GridValidRowModel> = ({
  field,
  row,
  loading,
  isAvgEmpty,
  comparisonQuickAction,
  totalsLoading,
  ...rest
}) => {
  const title = KPIS_LIST[field].shirtTitle ?? KPIS_LIST[field].title;
  const isTotal = row.name === 'Total';

  return (
    <TableValueCellRenderer
      isTotal={isTotal}
      loading={loading || (isTotal && totalsLoading)}
      p={1}
      kpi_key={field}
      title={title}
      comparisonQuickAction={comparisonQuickAction}
      code={'EUR'}
      isAvgEmpty={isAvgEmpty}
      {...rest}
    />
  );
};
