import React from 'react';
import { Wrapper } from './Dimensions.styles';
import { TableDimensionSelect } from '@shared';
import { useDeepDiveContext } from '@features/DeepDiveTable';

interface DimensionsProps {}

export const Dimensions = React.memo<DimensionsProps>(() => {
  const {
    primary_dimension,
    secondary_dimension,
    dimension_options,
    handlePrimaryDimensionChange,
    secondaryDimensionChange,
    loading,
    disableActions,
    topPrimaryKeys,
    hidePrimaryOther,
  } = useDeepDiveContext();

  return (
    <Wrapper>
      <TableDimensionSelect
        hidePrimaryOther={hidePrimaryOther}
        topKeys={topPrimaryKeys}
        title={'Primary Dimension'}
        dimension={primary_dimension}
        dimension_options={dimension_options}
        handleChange={handlePrimaryDimensionChange}
        loading={loading}
        disableActions={disableActions}
      />
      <TableDimensionSelect
        title={'Secondary Dimension'}
        dimension={secondary_dimension}
        dimension_options={dimension_options}
        handleChange={secondaryDimensionChange}
        loading={loading}
        disableActions={disableActions}
        isSecondary
      />
    </Wrapper>
  );
});
