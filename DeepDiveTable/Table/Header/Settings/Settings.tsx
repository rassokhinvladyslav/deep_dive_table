import React from 'react';
import { Button, Modal } from '@mui/material';
import SettingsIcon from '@assets/mc_settings.svg';
import { ColumnSettings } from '../../ColumnSettings';
import { useDeepDiveContext } from '../../../lib';
import { useMixpanelTrack, Text } from '@shared';

export const Settings = React.memo(() => {
  const { disableActions, loading, track, kpis, pinned_kpis } =
    useDeepDiveContext();

  const mixpanelTrack = useMixpanelTrack();
  const [open, setOpen] = React.useState(false);

  const handleOpen = React.useCallback(() => {
    setOpen(true);

    if (track?.columnSettingsOpen) {
      mixpanelTrack(track.columnSettingsOpen);
    }
  }, [mixpanelTrack, track]);

  const handleClose = React.useCallback((_, reason) => {
    if (reason !== 'backdropClick') setOpen(false);
  }, []);

  const kpisLength = kpis.length + pinned_kpis.length;

  return (
    <>
      <Button
        onClick={handleOpen}
        disabled={disableActions || loading}
        size={'small'}
        sx={{
          gap: '8px',
          padding: '7px 8px !important',
          '&:hover': { backgroundColor: '#FAFAFE' },
        }}
      >
        <SettingsIcon />
        <Text variant={'buttonM'}>Metrics</Text>
        <Text variant={'buttonM'} colorGrade={400} sx={{ marginLeft: '-4px' }}>
          ({kpisLength})
        </Text>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <>
          <ColumnSettings handleClose={handleClose as () => void} />
        </>
      </Modal>
    </>
  );
});
