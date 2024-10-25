import { styled, Box, Button } from '@mui/material';

export const Wrapper = styled(Box)(({ theme }) => ({
  padding: '0 6px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
  boxShadow: 'none',
  height: '20px !important',
  opacity: 1,
  backgroundColor: theme.palette.secondary[100],
  '& .MuiDataGrid-pinnedColumns': {
    height: '20px !important',
    backgroundColor: theme.palette.secondary[100],
    opacity: 1,
  },
}));

export const Item = styled(Button)(() => ({
  display: 'flex',
  height: '20px',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 !important',
  gap: '5px',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: 'transparent',
  },
}));

export const Truncate = styled(Box)(() => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '150px',
  height: '27px',
}));
