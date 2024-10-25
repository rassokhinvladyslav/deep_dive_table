import React from 'react';
import { Box, Tooltip } from '@mui/material';
import { Truncate, Wrapper } from './Name.styles';
import { Text, useResizeObserver } from '@shared';
import { CopyToClipboardButton } from '@shared/CopyToClipboardButton';

interface NameProps {
  name: string;
  isSecondary: boolean;
  description?: string | null;
  someRowSelected: boolean;
}

export const Name = React.memo<NameProps>(
  ({ name, isSecondary, description, someRowSelected }) => {
    const [ref, { width }] = useResizeObserver();

    return (
      <Wrapper ref={ref} isSecondary={isSecondary} isTotal={name === 'Total'}>
        <Truncate width={width - 20}>
          <Tooltip title={name} placement="right-start">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <Text variant={name === 'Total' ? 'body1B' : 'body1R'}>
                {name === 'Total' && someRowSelected
                  ? 'Total of selected'
                  : name}
              </Text>
              {description && !isSecondary && (
                <Text variant={'body2R'} colorGrade={400}>
                  {description}
                </Text>
              )}
            </Box>
          </Tooltip>
        </Truncate>
        {name !== 'Total' && <CopyToClipboardButton value={name} />}
      </Wrapper>
    );
  },
);
