import React from 'react';
import { HeadWrapper } from './ValueRenderer.styles';
import { KPIS_LIST } from '@lib/KPIS';

export const ValueHeadRenderer = ({ field }) => {
  const title = KPIS_LIST[field].shirtTitle ?? KPIS_LIST[field].title;

  return (
    <HeadWrapper disableSorting={false}>
      <p>{title}</p>
    </HeadWrapper>
  );
};
