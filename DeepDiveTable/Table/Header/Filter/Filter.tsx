import React from 'react';
import { AdvancedFilter, FilterItem } from '@features/AdvancedFilter';
import { PROFITABILITY_KPIS } from '@lib/constants';
import { KPIS_LIST } from '@lib/KPIS';
import { useDeepDiveContext } from '../../../lib';

interface FilterProps {}

export const Filter = React.memo<FilterProps>(() => {
  const {
    kpi_options,
    filter_kpis,
    platform_options,
    dimension_options,
    filters,
    handleFiltersChange,
    loading,
    disableActions,
    view,
    hidePoas,
  } = useDeepDiveContext();
  const [open, setOpen] = React.useState(false);

  const handleApply = React.useCallback(
    (filters: FilterItem[]) => {
      handleFiltersChange(filters);
      setOpen(false);
    },
    [handleFiltersChange],
  );

  const handleCancel = React.useCallback(() => {
    setOpen(false);
    handleFiltersChange(filters);
  }, [filters, handleFiltersChange]);

  const handleOpen = React.useCallback(() => {
    setOpen(true);
  }, []);

  const { kpis, dimensions } = React.useMemo(
    () => ({
      kpis: (filter_kpis ?? kpi_options)
        .reduce(reducer, [])
        .filter(kpi => !PROFITABILITY_KPIS.includes(kpi.value)),
      dimensions: Object.entries(dimension_options).map(([key, value]) => ({
        label: value,
        value: key,
      })),
    }),
    [filter_kpis, kpi_options, dimension_options],
  );

  return (
    <AdvancedFilter
      tooltip={'Filter'}
      view={view}
      title={'Deep Dive Filters'}
      open={open}
      platforms={platform_options}
      filters={filters}
      dimensions={dimensions}
      onApply={handleApply}
      onCancel={handleCancel}
      handleOpen={handleOpen}
      disabled={loading || disableActions}
      kpis={kpis}
      hidePoas={hidePoas}
    />
  );
});

const reducer = (acc, group) => [
  ...acc,
  ...group.values.map(kpi => ({
    label: KPIS_LIST[kpi].title,
    value: kpi,
  })),
];
