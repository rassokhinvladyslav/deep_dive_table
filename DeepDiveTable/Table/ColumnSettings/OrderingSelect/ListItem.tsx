import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Label } from './Label';
import { KPIS_LIST } from '@lib/KPIS';

interface ListItemProps {
  id: string;
  index?: number;
  handleSelectColumn: (key: string) => void;
}

export const ListItem = React.memo<ListItemProps>(
  ({ id, index, handleSelectColumn }) => {
    const handleSelect = () => {
      handleSelectColumn(id);
    };

    return (
      <Draggable key={id} draggableId={id} index={index} isDragDisabled={false}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <Label
              drugguble={true}
              label={KPIS_LIST[id].shirtTitle ?? KPIS_LIST[id].title}
              handleSelectColumn={handleSelect}
            />
          </div>
        )}
      </Draggable>
    );
  },
);
