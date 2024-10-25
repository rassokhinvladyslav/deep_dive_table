import React from 'react';
import { StyledDataGrid, DataGridContainer } from './Table.styles';
import { Header } from './Header';
import { Footer } from './Footer';
import { useColumns, useRows, useTableHeight } from './hooks';
import { SortingArrows } from '@shared';
import { Stack } from '@mui/material';
import { useDeepDiveContext } from '../lib';
import { ResizableChartContainer } from '@features/ResizableChartContainer';

export const Table = React.memo(() => {
  const {
    loading,
    selectedRows,
    fullScreen,
    sortModel,
    handleSortModelChange,
    gridContainerRef,
    showLeftShadow,
    showRightShadow,
  } = useDeepDiveContext();

  const { columns, pinnedColumns } = useColumns();
  const { rows, pinnedRows } = useRows();
  const height = useTableHeight();

  return (
    <ResizableChartContainer height={height}>
      <DataGridContainer fullScreen={fullScreen} ref={gridContainerRef}>
        <StyledDataGrid
          fullScreen={fullScreen}
          showLeftPinnedShadow={showLeftShadow}
          showRightShadow={showRightShadow}
          hideY={rows.length < 10}
          loading={loading}
          columns={columns}
          rows={rows}
          initialState={{
            sorting: {
              sortModel,
            },
          }}
          headerHeight={38}
          onSortModelChange={handleSortModelChange}
          experimentalFeatures={{ rowPinning: true }}
          pinnedRows={pinnedRows}
          pinnedColumns={pinnedColumns}
          getRowClassName={params =>
            selectedRows && selectedRows[params.row.id]
              ? 'selectedRow'
              : 'notSelectedRow'
          }
          keepColumnPositionIfDraggedOutside
          isRowSelectable={() => false}
          components={{
            Toolbar: Header,
            Footer,
            ColumnSortedAscendingIcon: SortingArrows.Asc,
            ColumnSortedDescendingIcon: SortingArrows.Desc,
            NoRowsOverlay: () => (
              <Stack height="100%" alignItems="center" justifyContent="center">
                There are no results
              </Stack>
            ),
          }}
        />
      </DataGridContainer>
    </ResizableChartContainer>
  );
});
