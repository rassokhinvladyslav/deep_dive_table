import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderTop: `1px solid ${theme.palette.grey[100]}`,
}));
