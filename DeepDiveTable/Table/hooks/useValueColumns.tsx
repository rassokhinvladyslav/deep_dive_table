import { useDeepDiveContext } from '../../lib';
import React from 'react';
import { GridColDef } from '@mui/x-data-grid';
import { KPIS_LIST } from '@lib/KPIS';
import { ValueHeadRenderer, ValueRenderer } from '../renderers';
import { QuickActionsLabels, useCompareOptions } from '@entities/Time';

export const useValueColumns = () => {
  const { kpis } = useDeepDiveContext();
  const { comparisonQuickAction, isAvgEmpty } = useCompareOptions();

  const { pinned_kpis, loading, totalsLoading } = useDeepDiveContext();

  return React.useMemo(() => {
    const columns: GridColDef[] = [];

    [...pinned_kpis, ...kpis].forEach(kpi => {
      const title = KPIS_LIST[kpi].shirtTitle ?? KPIS_LIST[kpi].title;

      columns.push({
        field: kpi,
        width: 120,
        maxWidth: 240,
        minWidth: 60,
        headerName: title,
        sortable: true,
        resizable: false,
        valueFormatter: params => (params.value?.kpi ? params.value.kpi : 0),
        sortComparator: (v1, v2) => v1?.kpi - v2?.kpi,
        renderHeader: ValueHeadRenderer,
        renderCell: params => (
          <ValueRenderer
            loading={loading}
            totalsLoading={totalsLoading}
            isAvgEmpty={isAvgEmpty}
            comparisonQuickAction={comparisonQuickAction}
            {...params}
          />
        ),
      });

      columns.push({
        field: `${kpi}_compare`,
        width: 0,
        minWidth: 0,
        maxWidth: 0,
        resizable: false,
        headerName: `vs ${QuickActionsLabels[comparisonQuickAction]}`,
      });
    });

    return columns;
  }, [
    kpis,
    comparisonQuickAction,
    isAvgEmpty,
    pinned_kpis,
    loading,
    totalsLoading,
  ]);
};
