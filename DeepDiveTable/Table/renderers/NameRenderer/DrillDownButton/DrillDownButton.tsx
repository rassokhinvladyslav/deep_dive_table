import React from 'react';
import { Wrapper } from './DrillDownButton.styles';
import Chevron_right from '@assets/chevron_right.svg';
import { useDeepDiveContext } from '../../../../lib';
import { Breadcrumb } from '@features/DeepDiveTable';
import { Box } from '@mui/material';

interface DrillDownButtonProps {
  expandable: boolean;
  field: string;
  expand_dimension: string;
  expand_id: string | null;
  expand_group: string | null;
  name: string;
  secondary_name: string | null;
  current_dimension: string;
}

export const DrillDownButton = React.memo<DrillDownButtonProps>(
  ({
    field,
    expandable,
    expand_dimension,
    expand_id,
    expand_group,
    name,
    secondary_name,
    current_dimension,
  }) => {
    const { handleDrillDown, breadcrumbs } = useDeepDiveContext();

    const onDrillDown = React.useCallback(() => {
      handleDrillDown({
        breadcrumbs: {
          ...breadcrumbs,
          [current_dimension]: {
            value: name,
            current_dimension,
            expand_dimension,
            expand_id,
            secondaryName: secondary_name,
          },
        } as Record<string, Breadcrumb>,
        current_dimension,
        expand_dimension,
        expand_group,
        expand_id,
      });
    }, [
      handleDrillDown,
      breadcrumbs,
      current_dimension,
      expand_dimension,
      expand_group,
      expand_id,
      name,
      secondary_name,
    ]);

    if (field !== 'name' || name === 'Total') return null;

    if (!expandable)
      return <Box sx={{ width: '28px', minWidth: '28px', height: '50px' }} />;

    return (
      <Wrapper onClick={onDrillDown}>
        <Chevron_right />
      </Wrapper>
    );
  },
);
