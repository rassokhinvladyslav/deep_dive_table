import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFF',
  padding: theme.spacing(1, 2),
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '10px 10px 0 0',
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
}));

export const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));
