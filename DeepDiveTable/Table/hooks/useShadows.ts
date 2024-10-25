import { useResizeObserver } from '@shared';
import React from 'react';

export const useShadows = ({ columns, secondary_dimension }) => {
  const [gridContainerRef, { width }] = useResizeObserver();

  const columnWidth = !!secondary_dimension
    ? (columns.length - 4) * 120 + 900
    : (columns.length - 3) * 120 + 580;

  const [showLeftShadow, setShowLeftShadow] = React.useState(false);
  const [showRightShadow, setShowRightShadow] = React.useState(false);

  React.useLayoutEffect(() => {
    setShowRightShadow(width < columnWidth);
  }, [columnWidth, width]);

  const handleScroll = React.useCallback(
    ({ left }: { left: number }, e) => {
      if (left > 0) {
        if (!e.target) return;

        const dif = e.target.scrollWidth - e.target.clientWidth;

        if (dif <= left) {
          setShowRightShadow(false);
        }

        if (!showRightShadow && dif > left) {
          setShowRightShadow(true);
        }
      }

      if (!showLeftShadow && left > 0) {
        setShowLeftShadow(true);
      }

      if (left === 0) {
        setShowLeftShadow(false);
      }
    },
    [showLeftShadow, setShowLeftShadow, setShowRightShadow, showRightShadow],
  );

  return {
    gridContainerRef,
    showLeftShadow,
    showRightShadow,
    handleScroll,
  };
};
