import { useDeepDiveContext } from '@features/DeepDiveTable';

export const useTableHeight = () => {
  const { data, breadcrumbs, slots, totals } = useDeepDiveContext();
  const chartHeight = slots.Chart ? 444 : 0;
  const extraHeight = 148;
  const breadcrumbsHeight = 20;
  const rowHeight = 52;
  const totalsHeight = totals ? 0 : 52;

  if (!data || data.length === 0) return 202 + chartHeight;

  if (breadcrumbs)
    return (
      (data.length >= 10 ? 11 : data.length + 1) * rowHeight +
      extraHeight +
      breadcrumbsHeight +
      chartHeight -
      totalsHeight
    );

  return (
    (data.length >= 10 ? 11 : data.length + 1) * rowHeight +
    extraHeight +
    chartHeight -
    totalsHeight
  );
};
