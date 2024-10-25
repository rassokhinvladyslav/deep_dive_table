import React from 'react';
import { DeepDiveContext, ExcludedDeepDiveContextPropKeys } from './types';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import { useShadows } from '@features/DeepDiveTable/Table/hooks';

const deepDiveContext = React.createContext<DeepDiveContext>(
  {} as DeepDiveContext,
);

interface DeepDiveContextProviderProps
  extends Omit<DeepDiveContext, ExcludedDeepDiveContextPropKeys> {
  children: React.ReactNode | React.ReactNode[];
}

export const DeepDiveContextProvider = React.memo<DeepDiveContextProviderProps>(
  ({ children, ...rest }) => {
    const { gridContainerRef, showLeftShadow, showRightShadow, handleScroll } =
      useShadows({
        columns: [...rest.kpis, ...rest.pinned_kpis],
        secondary_dimension: rest.secondary_dimension,
      });
    const [selectedRows, setSelectedRows] = React.useState<
      DeepDiveContext['selectedRows']
    >(rest.selectedRows);

    const debouncedHandleSelectRow = React.useMemo(
      () => debounce(rest.handleSelectRow, 1000),
      [rest.handleSelectRow],
    );

    const handleSelectRow = React.useCallback(
      (rows: DeepDiveContext['selectedRows']) => {
        if (
          rest.rowSelectionLimit &&
          Object.keys(rows).length > rest.rowSelectionLimit
        )
          return;

        setSelectedRows(rows);
        debouncedHandleSelectRow(rows);
      },
      [debouncedHandleSelectRow, rest.rowSelectionLimit],
    );

    React.useEffect(() => {
      if (rest.selectedRows && !isEqual(rest.selectedRows, selectedRows)) {
        setSelectedRows(rest.selectedRows);
      }
    }, [rest.selectedRows]);

    return (
      <deepDiveContext.Provider
        value={{
          ...rest,
          debouncedHandleSelectRow,
          handleSelectRow,
          selectedRows,
          gridContainerRef,
          showLeftShadow,
          showRightShadow,
          handleScroll,
        }}
      >
        {children}
      </deepDiveContext.Provider>
    );
  },
);

export const useDeepDiveContext = () => {
  const context = React.useContext(deepDiveContext);
  if (context === undefined) {
    throw new Error(
      'useDeepDiveContext must be used within a DeepDiveContextProvider',
    );
  }
  return context;
};
