import React from 'react';
import { Wrapper } from './NameRenderer.styles';
import { Name } from './Name';
import { DrillDownButton } from './DrillDownButton';

export const NameRenderer =
  ({ selectedRows }) =>
  ({ field, row, value }) => {
    return (
      <Wrapper>
        <DrillDownButton
          field={field}
          expandable={row.expandable}
          expand_dimension={row.expand_dimension}
          expand_id={row.expand_id}
          expand_group={row.expand_group}
          name={value}
          secondary_name={row.secondary_name}
          current_dimension={row.current_dimension}
        />
        <Name
          name={value}
          isSecondary={field === 'secondary_name'}
          description={row.description}
          someRowSelected={Object.keys(selectedRows).length > 0}
        />
      </Wrapper>
    );
  };
