import { Box, IconButton } from '@mui/material';
import React from 'react';
import { ItemWrapper, Truncate } from './OrderingSelect.styles';
import DrugIcon from '@assets/mc_drug.svg';
import X from '@assets/mc_x.svg';
import { Text } from '@shared';

interface LabelProps {
  drugguble?: boolean;
  label: string;
  handleSelectColumn: () => void;
}

export const Label = React.memo<LabelProps>(
  ({ drugguble, label, handleSelectColumn }) => {
    return (
      <ItemWrapper druggable={drugguble}>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
          {drugguble && <DrugIcon />}
          <Truncate>
            <Text variant="paragraph1">{label}</Text>
          </Truncate>
        </Box>
        {handleSelectColumn && label !== 'Entity Name' && (
          <IconButton
            onClick={handleSelectColumn}
            sx={{ '&:hover': { backgroundColor: 'transparent' } }}
          >
            <X />
          </IconButton>
        )}
      </ItemWrapper>
    );
  },
);
