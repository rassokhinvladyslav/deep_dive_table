import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'isFullScreen',
})<{ isFullScreen?: boolean }>(({ theme, isFullScreen }) => ({
  width: '100%',
  height: isFullScreen ? '50px' : '32px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFF',
  padding: theme.spacing(1, 2),
  position: 'relative',
  zIndex: 100,
  borderTop: '1px solid #F5F6F8',
  borderRadius: '0px 0px 8px 8px',
}));

export const ExpandBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
  borderRadius: '4px',
  padding: theme.spacing(0.5, 1),
  '&:hover': {
    cursor: 'pointer',
  },
}));
