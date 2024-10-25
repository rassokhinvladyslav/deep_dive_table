import { styled, Box } from '@mui/material';
export const Wrapper = styled(Box)(() => ({
  backgroundColor: '#E3E4E8',
  width: '280px',
  height: '528px',
  padding: '8px 16px 16px 16px',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    width: 0,
  },
}));

export const ListWrpaper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const ItemWrapper = styled(Box, {
  shouldForwardProp: prop => prop !== 'druggable',
})<{ druggable?: boolean }>(({ druggable }) => ({
  padding: druggable ? '0 0 0 7px' : '0 0 0 12px',
  height: '34px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#fff',
  borderRadius: '4px',
  '&:hover': {
    cursor: 'grab',
  },
}));

export const Truncate = styled(Box)<{ width?: number }>(({ theme, width }) => ({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: width ?? '171px',
  cursor: 'default',
  [theme.breakpoints.down(900)]: {
    maxWidth: '121px',
  },
}));
