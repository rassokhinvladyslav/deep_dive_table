import React from 'react';
import { Container, Wrapper } from './Header.styles';
import { Text } from '@shared';
import X from '@assets/mc_x.svg';
import { IconButton } from '@mui/material';
import { GlossaryButton } from '@features/Glossary';

interface HeaderProps {
  handleClose: () => void;
}

export const Header = React.memo<HeaderProps>(({ handleClose }) => (
  <Wrapper>
    <Text variant="h5">Customize columns</Text>
    <Container>
      <GlossaryButton variant="button" />
      <IconButton onClick={handleClose}>
        <X />
      </IconButton>
    </Container>
  </Wrapper>
));
