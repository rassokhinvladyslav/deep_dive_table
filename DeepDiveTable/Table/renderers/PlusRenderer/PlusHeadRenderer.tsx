import React from 'react';
import { HeadWrapper, StyledIconButton } from './PlusRenderer.styles';
import Plus_circle from '@assets/plus_circle.svg';
import { Modal } from '@mui/material';
import { ColumnSettings } from '../../ColumnSettings';

export const PlusHeadRenderer = ({ disabled }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => setOpen(true), []);

  const handleClose = React.useCallback((_, reason) => {
    if (reason !== 'backdropClick') setOpen(false);
  }, []);

  return (
    <HeadWrapper>
      <StyledIconButton disabled={disabled} onClick={handleOpen}>
        <Plus_circle />
      </StyledIconButton>
      <Modal open={open} onClose={handleClose}>
        <>
          <ColumnSettings handleClose={handleClose as () => void} />
        </>
      </Modal>
    </HeadWrapper>
  );
};
