import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '4px',
  '& .copy-button': {
    display: 'none',
  },
  '&:hover ': {
    '& .copy-button': {
      display: 'flex',
    },
  },
}));

export const HeaderText = styled(Box, {
  shouldForwardProp: prop => prop !== 'disableSorting' && prop !== 'isName',
})<{ disableSorting: boolean; isName: boolean }>(
  ({ theme, disableSorting, isName }) => ({
    width: '100%',
    padding: '0 0 0 8px',
    ...(isName && { padding: '0 0 0 36px' }),
    whiteSpace: 'normal',
    '& p': {
      ...(disableSorting && {
        cursor: 'default',
        color: theme.palette.secondary[300],
      }),
      color: theme.palette.secondary[500],
      fontSize: 12,
      fontWeight: 700,
      fontStyle: 'normal',
      margin: 0,
    },
  }),
);
