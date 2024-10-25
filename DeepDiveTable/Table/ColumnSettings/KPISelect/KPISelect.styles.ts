import { styled, Box, TextField } from '@mui/material';

export const Wrapper = styled(Box)(() => ({
  width: '442px',
  height: '528px',
  display: 'flex',
  flexDirection: 'column',
}));

export const SearchBox = styled(Box)(({ theme }) => ({
  height: '33px',
  width: '100%',
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  padding: '4px 16px',
}));

export const SelectItemContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

export const ListContainer = styled(Box)(() => ({
  padding: '8px 16px 8px 8px',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '25px',
    padding: '0 !important',
    '& .MuiInputAdornment-root': {
      marginRight: '-8px',
      '& path': {
        stroke: theme.palette.secondary[600],
      },
    },
    '& fieldset': {
      border: 0,
    },
  },
}));

export const ListHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: theme.palette.grey[50],
  height: '24px',
  padding: '0 16px',
}));
