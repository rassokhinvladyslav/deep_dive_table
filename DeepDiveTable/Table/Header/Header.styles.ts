import { styled, Box } from '@mui/material';

export const Wrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FFF',
  borderRadius: '8px 8px 0 0',

  borderBottom: '1px solid #F5F6F8',
}));

interface ContainerProps {
  isFullScreen: boolean;
  withTabs: boolean;
  buttomBorder?: boolean;
}

export const Container = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'isFullScreen' && prop !== 'withTabs' && prop !== 'buttomBorder',
})<ContainerProps>(({ isFullScreen, withTabs, buttomBorder, theme }) => ({
  height: isFullScreen ? '80px' : '54px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 16px',
  ...(buttomBorder && {
    borderBottom: `1px solid ${theme.palette.secondary[100]}`,
  }),
  ...(withTabs && {
    paddingLeft: 0,
  }),
  minHeight: 54,
}));

export const ActionsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  height: '100%',
}));
