import { StyledIconButton, TabItem, Tabs } from './TabsTitle.styles';
import Mc_show_menu from '@assets/mc_show_menu.svg';
import { InfoPopup, Text } from '@shared';
import React from 'react';

interface TitleProps {
  activeTab: 0 | 1;
  handleChangeTab: (tab: 0 | 1) => () => void;
  isFullScreen: boolean;
  handleFullScreen: () => void;
}
export const TabsTitle = React.memo<TitleProps>(
  ({ activeTab, handleChangeTab, isFullScreen, handleFullScreen }) => (
    <Tabs isFullScreen={isFullScreen}>
      {isFullScreen && (
        <StyledIconButton onClick={handleFullScreen}>
          <Mc_show_menu />
        </StyledIconButton>
      )}
      <TabItem
        active={activeTab === 0}
        onClick={handleChangeTab(0)}
        rounded={!isFullScreen}
      >
        <Text variant="h4" color={activeTab === 0 ? 'primary' : 'secondary'}>
          Deep Dive
        </Text>
      </TabItem>
      <TabItem active={activeTab === 1} onClick={handleChangeTab(1)}>
        <Text variant="h4" color={activeTab === 1 ? 'primary' : 'secondary'}>
          Attribution Comparison
        </Text>
        <InfoPopup
          title="Attribution Comparison"
          description="We began collecting data for all channels on March 1, 2024. Avoid comparing data from before this date due to potential inconsistencies in the total number of orders."
          position="bottom"
        />
      </TabItem>
    </Tabs>
  ),
);
