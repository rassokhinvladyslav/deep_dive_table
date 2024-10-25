import { Box, styled } from '@mui/material';
import { DataGridPremium } from '@mui/x-data-grid-premium';

export const DataGridContainer = styled(Box, {
  shouldForwardProp: prop =>
    prop !== 'fullScreen' && prop !== 'showBreadcrumbs',
})<{ fullScreen: boolean }>(({ fullScreen }) => ({
  transition: 'height 0.3s ease',
  backgroundColor: '#FFF',
  borderRadius: 8,
  height: '100%',
  ...(fullScreen && {
    height: `calc(100vh - 60px)`,
  }),
}));

export const StyledDataGrid = styled(DataGridPremium, {
  shouldForwardProp: prop =>
    prop !== 'hideY' &&
    prop !== 'showLeftPinnedShadow' &&
    prop !== 'showRightShadow' &&
    prop !== 'fullScreen',
})<{
  hideY?: boolean;
  showLeftPinnedShadow?: boolean;
  showRightShadow?: boolean;
  fullScreen?: boolean;
}>(({ showLeftPinnedShadow, showRightShadow, hideY, fullScreen }) => ({
  border: 0,
  width: '100%',
  height: '100%',

  ...(hideY && {
    '& .MuiDataGrid-virtualScroller': {
      overflowY: 'hidden',
    },
  }),
  '& .selectedRow': {
    backgroundColor: '#EFEBFD !important',
  },

  '& .MuiDataGrid-virtualScrollerRenderZone': {
    '.selectedRow': {
      backgroundColor: '#EFEBFD !important',
    },
  },

  '[data-field="plus"]': {
    width: '28px !important',
    minWidth: '28px !important',
  },
  '& .MuiDataGrid-pinnedColumnHeaders': {
    padding: '0 !important',
  },
  '& .MuiDataGrid-pinnedColumnHeaders--left': {
    boxShadow: showLeftPinnedShadow
      ? '8px 0px 8px 0px #F0F0FA'
      : '3px 0px 0px 0px #F0F0FA',
  },
  '& .MuiDataGrid-pinnedColumns--left': {
    boxShadow: showLeftPinnedShadow
      ? '8px 0px 8px 0px #F0F0FA'
      : '3px 0px 0px 0px #F0F0FA',
  },
  '& .MuiDataGrid-pinnedColumnHeaders--right': {
    borderLeft: '3px solid #F0F0FA',
    boxShadow: showRightShadow ? '-3px 0px 8px 0px #F0F0FA' : 'none',
  },
  '& .MuiDataGrid-pinnedColumns--right': {
    borderLeft: '3px solid #F0F0FA',
    boxShadow: showRightShadow ? '-3px 0px 8px 0px #F0F0FA' : 'none',
  },
  '& .MuiDataGrid-pinnedColumns': {
    '& .selectedRow': {
      backgroundColor: '#EFEBFD !important',
    },
  },
  '& .MuiDataGrid-columnHeader[data-field="plus"]': {
    minWidth: `${hideY ? 28 : 36}px !important`,
  },

  '& .MuiDataGrid-columnHeader': {
    padding: 0,
    '& .MuiIconButton-sizeSmall:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  },
  '& .MuiDataGrid-cell': {
    padding: 0,
    borderColor: '#F0F0FA',
  },
  '& .MuiDataGrid-columnHeaders': {
    borderRadius: '0 !important',
    border: 0,
    '&:hover': {
      '& .MuiDataGrid-columnSeparator': {
        display: 'flex',
      },
    },
  },
  '& .MuiDataGrid-menuIcon': {
    display: 'none',
  },

  '& .Mui-hovered': {
    background:
      'linear-gradient(0deg, rgba(227, 228, 232, 0.25) 0%, rgba(227, 228, 232, 0.25) 100%), rgba(255, 255, 255, 0.10) !important',
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-pinnedRows--bottom': {
    borderTop: '3px solid #F0F0FA',
    boxSizing: 'content-box',
    boxShadow: 'none',
    '& .MuiDataGrid-pinnedColumns--left': {
      borderRight: '3px solid #F0F0FA',
      boxShadow: showLeftPinnedShadow ? '8px 0px 8px 0px #F0F0FA' : 'none',
    },
    '& .MuiDataGrid-pinnedColumns--right': {
      // boxShadow: '3px 2px 0px 0px #F0F0FA inset !important',
    },
  },
  '& .MuiDataGrid-virtualScroller': {
    maxHeight: fullScreen ? 'auto' : 604,
    ...(hideY && {
      overflowY: 'hidden !important',
    }),
  },
  '& .MuiDataGrid-pinnedRows--top': {
    '& .selectedRow': {
      backgroundColor: '#EFEBFD !important',
    },
  },
}));
