import React from 'react';
import { Checkbox } from '@mui/material';
import CheckboxIcon from '@assets/table_checkbox_unchecked.svg';
import SelectedIcon from '@assets/table_checkbox_checked_minus.svg';
import { HeadWrapper } from './CheckboxRenderer.styles';

export const HeadCheckboxRenderer =
  ({ loading, selectedRows, handleSelectRow }) =>
  () => {
    const onChange = () => {
      handleSelectRow({});
    };

    return (
      <HeadWrapper>
        <Checkbox
          disabled={loading || Object.keys(selectedRows).length === 0}
          icon={<CheckboxIcon />}
          checkedIcon={<SelectedIcon />}
          onChange={onChange}
          checked={Object.keys(selectedRows).length > 0}
        />
      </HeadWrapper>
    );
  };
