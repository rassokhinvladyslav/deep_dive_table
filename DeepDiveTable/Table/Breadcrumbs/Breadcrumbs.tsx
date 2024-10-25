import React from 'react';
import Arrow_left from '@assets/mc_table_arrow_left.svg';
import { Item, Wrapper } from './Breadcrumbs.styles';
import { Text } from '@shared';
import { Breadcrumb } from './Breadcrumb';
import { capitalize } from '@mui/material';
import { useDeepDiveContext, Breadcrumb as BreadcrumbType } from '../../lib';

export const Breadcrumbs = () => {
  const {
    breadcrumbs,
    primary_dimension,
    handleDrillDown,
    loading,
    disableActions,
  } = useDeepDiveContext();

  const handleReset = React.useCallback(() => {
    handleDrillDown({
      current_dimension: primary_dimension,
      expand_dimension: null,
      expand_group: null,
      expand_id: null,
      breadcrumbs: null,
    });
  }, [handleDrillDown, primary_dimension]);

  const applyBreadcrumb = React.useCallback(
    (breadcrumb: BreadcrumbType) => () => {
      handleDrillDown({
        expand_dimension: breadcrumb.expand_dimension,
        current_dimension: breadcrumb.current_dimension,
        expand_id: breadcrumb.expand_id,
        expand_group: breadcrumb.expand_group,
        breadcrumbs: getNewBreadcrumbs(breadcrumb, breadcrumbs),
      });
    },
    [breadcrumbs, handleDrillDown],
  );

  return (
    <Wrapper>
      <Item
        onClick={handleReset}
        disabled={loading || disableActions}
        disableRipple
      >
        <Arrow_left />
        <Text variant="body2R" colorGrade={600}>
          {getDimensionTitle(primary_dimension)}
        </Text>
      </Item>
      {breadcrumbs &&
        Object.entries(breadcrumbs).map(
          ([key, breadcrumb]) =>
            breadcrumb && (
              <Breadcrumb
                disabled={loading || disableActions}
                key={key}
                title={breadcrumb.value}
                applyBreadcrumb={applyBreadcrumb(breadcrumb)}
              />
            ),
        )}
    </Wrapper>
  );
};

const getNewBreadcrumbs = (
  breadcrumb: BreadcrumbType,
  breadcrumbs: { [key: string]: BreadcrumbType | null | undefined } | null,
) => {
  const newBreadcrumbs = {};
  if (!breadcrumbs) return newBreadcrumbs;

  Object.entries(breadcrumbs).forEach(([_, value]) => {
    if (
      value &&
      dimensionsOrder[value.current_dimension] <
        dimensionsOrder[breadcrumb.current_dimension]
    ) {
      newBreadcrumbs[value.current_dimension] = value;
    }
  });

  return { ...newBreadcrumbs, [breadcrumb.current_dimension]: breadcrumb };
};

export enum DIMENSIONS {
  CHANNEL = 'channel',
  CAMPAIGN = 'campaign',
  CAMPAIGN_ID = 'campaign_id',
  ADGROUP = 'adgroup',
  ADGROUP_ID = 'adgroup_id',
  AD = 'ad',
  AD_ID = 'ad_id',
  UTM_SOURCE = 'utm_source',
  UTM_MEDIUM = 'utm_medium',
  UTM_CAMPAIGN = 'utm_campaign',
  UTM_CONTENT = 'utm_content',
  PRODUCT = 'product_name',
  SKU = 'sku',
  SEGMENT = 'segment_id',
}

const dimensionsOrder = {
  [DIMENSIONS.CHANNEL]: 0,
  [DIMENSIONS.CAMPAIGN]: 1,
  [DIMENSIONS.CAMPAIGN_ID]: 2,
  [DIMENSIONS.ADGROUP]: 3,
  [DIMENSIONS.ADGROUP_ID]: 4,
  [DIMENSIONS.AD]: 5,
  [DIMENSIONS.AD_ID]: 6,
  [DIMENSIONS.UTM_SOURCE]: 7,
  [DIMENSIONS.UTM_MEDIUM]: 8,
  [DIMENSIONS.UTM_CAMPAIGN]: 9,
  [DIMENSIONS.UTM_CONTENT]: 10,
  [DIMENSIONS.SEGMENT]: 11,
  [DIMENSIONS.PRODUCT]: 12,
  [DIMENSIONS.SKU]: 13,
};

const getDimensionTitle = (dimension: string) =>
  capitalize(
    dimension === 'adgroup'
      ? 'Adgroup / Adset'
      : dimension === 'adgroup_id'
      ? 'Adgroup / Adset_id'
      : dimension === 'product_name'
      ? 'Product'
      : dimension === 'variant_name'
      ? 'Variant'
      : dimension === 'sku'
      ? 'SKU'
      : dimension === 'segment_id'
      ? 'Segment'
      : String(dimension),
  );
