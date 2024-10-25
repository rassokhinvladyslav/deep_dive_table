import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'isSecondary' && prop !== 'isTotal',
})<{ isSecondary: boolean; isTotal: boolean }>(({ isSecondary, isTotal }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...(isSecondary && {
    padding: '0 0 0 8px',
  }),
  ...(isTotal && {
    padding: '0 0 0 36px',
  }),
}));

export const Truncate = styled(Box)<{ width: number }>(({ width }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: width,
  width: 'auto',
  cursor: 'default',
}));
