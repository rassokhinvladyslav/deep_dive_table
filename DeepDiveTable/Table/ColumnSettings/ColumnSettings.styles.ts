import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  width: '722px',
  height: '640px',
  backgroundColor: theme.palette.background.white,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: 'calc(50% - 320px)',
  left: 'calc(50% - 361px)',
  //transform: 'translate(-50%, -50%)',
}));

export const ContentContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  height: '528px',
}));
