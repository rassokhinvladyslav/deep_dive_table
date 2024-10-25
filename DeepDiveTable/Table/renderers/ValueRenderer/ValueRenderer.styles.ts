import { styled, Box } from '@mui/material';

export const HeadWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'disableSorting',
})<{ disableSorting: boolean }>(({ theme, disableSorting }) => ({
  width: '100%',
  padding: '0 0 0 8px',
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
    lineHeight: '16px',
    margin: 0,
  },
}));
