import React from 'react';
import { Item } from './Breadcrumbs.styles';
import ChevronRight from '@assets/mc_chevron_right.svg';
import { Text } from '@shared';

export const Breadcrumb = ({ title, applyBreadcrumb, disabled }) => (
  <Item onClick={applyBreadcrumb} disabled={disabled} disableRipple>
    <ChevronRight />
    <Text variant="body2R" colorGrade={600}>
      {title}
    </Text>
  </Item>
);
