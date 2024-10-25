import { Button } from '@mui/material';
import React from 'react';
import { Wrapper } from './Footer.styles';

export const Footer = ({ handleClose, handleApply, handleReset }) => {
  const onApply = React.useCallback(() => {
    handleApply();
    handleClose();
  }, [handleClose, handleApply]);

  const onClose = React.useCallback(() => {
    handleClose();
    handleReset();
  }, [handleClose]);

  return (
    <Wrapper>
      <Button variant="outlined" onClick={onClose}>
        Cancel
      </Button>
      <Button variant="contained" onClick={onApply}>
        Apply
      </Button>
    </Wrapper>
  );
};
