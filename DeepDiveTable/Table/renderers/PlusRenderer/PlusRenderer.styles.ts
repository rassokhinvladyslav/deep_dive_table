import { styled, Box, IconButton } from '@mui/material';

export const CellWrapper = styled(Box)(() => ({
  width: '15px',
  height: '100%',
  marginLeft: '5px',
}));

export const HeadWrapper = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '36px',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '28px',
  height: '36px',
  padding: 0,
  position: 'relative',
  zIndex: 1500,
  '&:hover': {
    cursor: 'poiner',
    backgroundColor: 'rgba(227, 228, 232, 0.5)',
  },
}));
