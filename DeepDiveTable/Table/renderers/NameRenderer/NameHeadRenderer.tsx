import React from 'react';
import { HeaderText } from './NameRenderer.styles';

export const NameHeadRenderer = (loading: boolean) => props => {
  return (
    <HeaderText disableSorting={loading} isName={props.field === 'name'}>
      <p>{props.colDef.headerName}</p>
    </HeaderText>
  );
};
