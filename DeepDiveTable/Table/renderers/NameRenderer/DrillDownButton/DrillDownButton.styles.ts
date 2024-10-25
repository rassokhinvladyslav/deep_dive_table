import { styled, Button } from '@mui/material';

export const Wrapper = styled(Button)(() => ({
  width: '28px',
  minWidth: '28px',
  height: '50px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
  },
}));
