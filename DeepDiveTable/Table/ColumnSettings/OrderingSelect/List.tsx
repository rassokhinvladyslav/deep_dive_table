import { Text } from '@shared';
import React from 'react';
import { ListWrpaper } from './OrderingSelect.styles';
import { ListItem } from './ListItem';
import { Label } from './Label';

interface ListProps {
  title: string;
  items: string[];
  withName?: boolean;
  handleSelectColumn: (key: string) => void;
}

export const List: React.FC<ListProps> = ({
  title,
  items,
  withName,
  handleSelectColumn,
}) => {
  return (
    <ListWrpaper>
      <div style={{ padding: '8px 0' }}>
        <Text variant="caption" colorGrade={600}>
          {title}
        </Text>
      </div>
      {withName && (
        <Label label={'Entity Name'} handleSelectColumn={() => {}} />
      )}
      {items.map((id, index) => (
        <ListItem
          key={id}
          id={id}
          index={index}
          handleSelectColumn={handleSelectColumn}
        />
      ))}
    </ListWrpaper>
  );
};
