import { Text } from '@shared';
import React from 'react';
import { ExpandBox, Wrapper } from './Footer.styles';
import MaximizeIcon from '@assets/mc_maximize.svg';
import { useGridApiContext } from '@mui/x-data-grid-premium';
import { useDeepDiveContext } from '../../lib';

export const Footer = () => {
  const {
    dimension_options,
    current_dimension,
    toggleFullScreen,
    fullScreen,
    expand_dimension,
  } = useDeepDiveContext();
  const apiRef = useGridApiContext();

  return (
    <Wrapper isFullScreen={fullScreen}>
      <Text variant="body2R" colorGrade={400}>
        {getTitle(
          expand_dimension ?? current_dimension,
          apiRef.current.getRowsCount(),
          dimension_options,
        )}
      </Text>
      {!fullScreen && (
        <ExpandBox onClick={toggleFullScreen}>
          <MaximizeIcon />
          <Text variant="buttonS">Expand</Text>
        </ExpandBox>
      )}
    </Wrapper>
  );
};

const getTitle = (dimension: string, count: number, dimensions) => {
  if (dimension === 'adgroup') {
    return count === 1 ? '1 adgroup / adset' : `${count} adgroups / adsets`;
  }

  if (dimension === 'adgroup_id') {
    return count === 1
      ? '1 adgroup / adset_id'
      : `${count} adgroup / adset_ids`;
  }

  return count === 1
    ? `1 ${dimensions[dimension]}`
    : `${count} ${dimensions[dimension]}s`;
};
