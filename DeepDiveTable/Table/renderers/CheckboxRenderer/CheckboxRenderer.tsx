import { Checkbox } from '@shared/Checkbox';
import React from 'react';
import { Wrapper } from './CheckboxRenderer.styles';

export const CheckboxRenderer =
  ({ loading, selectedRows, handleSelectRow, disableSelection }) =>
  props => {
    const onChange = () => {
      if (selectedRows[props.row.id]) {
        const { [props.row.id]: _, ...rest } = selectedRows;
        handleSelectRow(rest);
        return;
      }
      handleSelectRow({
        ...selectedRows,
        [props.row.id]: {
          ids: [props.row.expand_id, props.row.secondary_id],
          names: [props.row.name, props.row.secondary_name],
        },
      });
    };

    if (props.row.name === 'Total') {
      return <Wrapper />;
    }

    return (
      <Wrapper>
        <Checkbox
          table
          checked={!!selectedRows[props.row.id]}
          onChange={onChange}
          disabled={
            loading || (!selectedRows[props.row.id] && disableSelection)
          }
        />
      </Wrapper>
    );
  };
