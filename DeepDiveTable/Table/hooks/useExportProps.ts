import React from 'react';
import dayjs from 'dayjs';
import { useDeepDiveContext } from '../../lib';
import { QuickActionsLabels } from '@entities/Time';
import { useQueryString } from '@shared';
import { stringifyAF, toExportString } from '@features/AdvancedFilter';

export const useExportProps = () => {
  const {
    attributionProps,
    current_dimension,
    dimension_options,
    secondary_dimension,
    title,
    filters,
    platform_options,
  } = useDeepDiveContext();
  const {
    query: { currentPeriod, comparisonPeriod, currentQa, comparisonQa },
  } = useQueryString();

  const kpi_type = attributionProps?.kpi_type;

  return React.useMemo(
    () => ({
      fileName: title,
      kpiKey: kpi_type ? kpi_type : null,
      expand_id: 'empty',
      current_dimension:
        dimension_options[current_dimension] ?? current_dimension,
      secondary_dimension: secondary_dimension
        ? dimension_options[secondary_dimension] ?? secondary_dimension
        : secondary_dimension,
      time_frame: getTimeFrame(dayjs, currentQa, currentPeriod, 0),
      comparisonPeriod: getTimeFrame(dayjs, comparisonQa, comparisonPeriod, 1),
      filters: null,
    }),
    [
      kpi_type,
      current_dimension,
      secondary_dimension,
      currentPeriod,
      comparisonPeriod,
      currentQa,
      comparisonQa,
      dimension_options,
      title,
    ],
  );
};

const getTimeFrame = (dayjs, currentQa, currentPeriod, type) => {
  if (currentQa) {
    return QuickActionsLabels[currentQa];
  }

  if (!currentPeriod && !currentQa) {
    return type === 0 ? 'Yesterday' : 'Previous period';
  }

  return `${dayjs(Number(currentPeriod[0])).format('DD.MM.YYYY')} - ${dayjs(
    Number(currentPeriod[1]),
  ).format('DD.MM.YYYY')}`;
};
