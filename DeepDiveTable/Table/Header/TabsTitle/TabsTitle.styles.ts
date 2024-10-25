import { styled, Box, IconButton } from '@mui/material';

export const Tabs = styled(Box, {
  shouldForwardProp: prop => prop !== 'isFullScreen',
})<{ isFullScreen?: boolean }>(({ isFullScreen }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  ...(isFullScreen && {
    paddingLeft: '17px',
  }),
}));

export const TabItem = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'active' && prop !== 'rounded' && prop !== 'disabled',
})<{ active: boolean; rounded?: boolean; disabled?: boolean }>(
  ({ active, theme, rounded, disabled }) => ({
    height: '100%',
    padding: '0 16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    borderTop: '3px solid transparent',
    ...(active && {
      borderTopColor: theme.palette.primary[500],
    }),
    ...(rounded && {
      borderTopLeftRadius: '4px',
    }),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.secondary[50],
    },
    ...(disabled && {
      opacity: 0.5,
      '&:hover': {
        cursor: 'default',
        backgroundColor: 'transparent',
      },
    }),
  }),
);

export const StyledIconButton = styled(IconButton)(() => ({
  marginTop: '3px',
  '&:hover': { backgroundColor: 'transparent' },
}));
