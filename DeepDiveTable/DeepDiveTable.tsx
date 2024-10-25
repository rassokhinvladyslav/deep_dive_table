import React from 'react';
import {
  DeepDiveContextProvider,
  DeepDiveContext,
  ExcludedDeepDivePropKeys,
} from './lib';
import { Table } from './Table';
import { Modal } from '@mui/material';

interface DeepDiveTableProps
  extends Omit<DeepDiveContext, ExcludedDeepDivePropKeys> {}

export const DeepDiveTable = React.memo<DeepDiveTableProps>(props => {
  const [fullScreen, setFullScreen] = React.useState(false);

  const toggleFullScreen = React.useCallback(() => {
    setFullScreen(prev => !prev);
  }, []);

  const handlePresESC = React.useCallback(
    e => {
      if (e.key === 'Escape') {
        toggleFullScreen();
      }
    },
    [toggleFullScreen],
  );

  if (fullScreen) {
    return (
      <DeepDiveContextProvider {...{ ...props, fullScreen, toggleFullScreen }}>
        <Modal
          open={fullScreen}
          hideBackdrop
          sx={{ marginTop: '60px' }}
          disablePortal
          onKeyDown={handlePresESC}
          tabIndex={0}
        >
          <div>
            <Table />
          </div>
        </Modal>
      </DeepDiveContextProvider>
    );
  }

  return (
    <DeepDiveContextProvider {...{ ...props, fullScreen, toggleFullScreen }}>
      <Table />
    </DeepDiveContextProvider>
  );
});
