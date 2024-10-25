import { DRUGGUBLE_IDS } from '@widgets/MarketingChannels/DeepDiveTable';
import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { List } from './List';
import { Wrapper } from './OrderingSelect.styles';

interface OrderingSelectProps {
  handleRemove: (value: string) => void;
  setColumns: React.Dispatch<
    React.SetStateAction<{
      pinned: string[];
      unpinned: string[];
    }>
  >;
  columns: {
    pinned: string[];
    unpinned: string[];
  };
}

export const OrderingSelect = React.memo<OrderingSelectProps>(
  ({ handleRemove, columns, setColumns }) => {
    const onDragEnd = React.useCallback(
      e => {
        const { source, destination } = e;
        if (!destination) return;

        if (source.droppableId === destination.droppableId) {
          const items = [...columns[source.droppableId]];

          const [removed] = items.splice(source.index, 1);
          items.splice(destination.index, 0, removed);

          setColumns(prev => ({
            ...prev,
            [source.droppableId]: items,
          }));
        } else {
          const sourceItems = [...columns[source.droppableId]];
          const destItems = [...columns[destination.droppableId]];
          const [removed] = sourceItems.splice(source.index, 1);
          destItems.splice(destination.index, 0, removed);

          setColumns(prev => ({
            ...prev,
            [source.droppableId]: sourceItems,
            [destination.droppableId]: destItems,
          }));
        }
      },
      [columns, setColumns],
    );

    const handleSelectColumn = React.useCallback(
      kpi => {
        handleRemove(kpi);
      },
      [handleRemove],
    );

    return (
      <Wrapper>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={DRUGGUBLE_IDS.PINNED}>
            {provided => (
              <div ref={provided.innerRef}>
                <List
                  items={columns.pinned}
                  title={'STICKY columns (up to 4)'}
                  withName
                  handleSelectColumn={handleSelectColumn}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId={DRUGGUBLE_IDS.UNPINNED}>
            {provided => (
              <div ref={provided.innerRef}>
                <List
                  items={columns.unpinned}
                  title={'Scrollable columns'}
                  handleSelectColumn={handleSelectColumn}
                />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </Wrapper>
    );
  },
);
