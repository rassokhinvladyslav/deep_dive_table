import { FilterItem } from '@features/AdvancedFilter';
import { GridEventListener, GridSortModel } from '@mui/x-data-grid-premium';
import { UseResizeObserverRef } from '@shared';

export interface Breadcrumb {
  value: string;
  expand_dimension: string;
  current_dimension: string;
  expand_group: string | null;
  expand_id: string;
}

export interface DrillDownParams {
  breadcrumbs: Record<string, Breadcrumb> | null;
  expand_dimension: string | null;
  current_dimension: string;
  expand_group: string | null;
  expand_id: string | null;
}

export interface SelectedRow {
  ids: [string, string | null];
  names: [string, string | null];
}

export type SelectedRows = Record<string, SelectedRow>;

export interface DeepDiveSlots {
  MoreButton?: React.ReactNode;
  Title?: React.ReactNode;
  Chart?: React.ReactNode;
  disableHeaderPadding?: boolean;
  borderBottom?: boolean;
}

export interface DeepDiveContext {
  hidePrimaryOther?: boolean;
  rowSelectionLimit?: number;
  expand_dimension?: string | null;
  hidePoas?: boolean;
  disableSelection?: boolean;
  sortModel?: GridSortModel;
  slots: DeepDiveSlots;
  hidePrimaryDimension?: boolean;
  toggleFullScreen: () => void;
  fullScreen: boolean;
  selectedRows: SelectedRows;
  handleSelectRow: (_: SelectedRows) => void;
  debouncedHandleSelectRow: (_: SelectedRows) => void;
  secondaryDimensionChange: (_: string | null) => void;
  handleDrillDown: (_: DrillDownParams) => void;
  handlePinnedKpisChange: (_: string[]) => void;
  handleKpisChange: (_: string[]) => void;
  handleFiltersChange: (_: FilterItem[]) => void;
  handlePrimaryDimensionChange: (_: string) => void;
  handleSortModelChange?: (_: GridSortModel) => void;
  title?: string;
  rowSearch: string;
  setRowSearch: (search: string) => void;
  primary_dimension: string;
  secondary_dimension: string | null;
  current_dimension: string;
  disableActions?: boolean;
  kpis: string[];
  pinned_kpis: string[];
  data: DeepDiveData[] | null;
  totals: TableKPI[] | null;
  attributionProps: AttributionProps | null;
  loading: boolean;
  totalsLoading?: boolean;
  filters: FilterItem[];
  track?: {
    columnSettingsOpen?: string;
  };

  dimension_options: {
    [key: string]: string;
  };
  platform_options: {
    [key: string]: string;
  };
  kpi_options: KpiOption[];
  filter_kpis?: KpiOption[];
  breadcrumbs: {
    [key: string]: Breadcrumb | null | undefined;
  } | null;
  view?: 'products' | 'deepdive';
  gridContainerRef: UseResizeObserverRef<Element>;
  showLeftShadow: boolean;
  showRightShadow: boolean;
  handleScroll: GridEventListener<'rowsScroll'>;
  topPrimaryKeys?: string[];
}

export type ExcludedDeepDivePropKeys =
  | 'fullScreen'
  | 'toggleFullScreen'
  | 'debouncedHandleSelectRow'
  | 'gridContainerRef'
  | 'showLeftShadow'
  | 'showRightShadow'
  | 'handleScroll';

export type ExcludedDeepDiveContextPropKeys =
  | 'debouncedHandleSelectRow'
  | 'gridContainerRef'
  | 'showLeftShadow'
  | 'showRightShadow'
  | 'handleScroll';

export interface KpiOption {
  name: string;
  values: string[];
}

export interface DeepDiveData {
  current_dimension: string;
  expand_dimension: string | null;
  expand_group: string | null;
  expand_id: string;
  expandable: boolean;
  id: string;
  kpis: TableKPI[];
  name: string;
  secondary_id: string | null;
  secondary_name: string | null;
}

export interface TableKPI {
  kpi_name: string;
  kpi_value: number;
  compare_kpi_value: number;
}

export interface AttributionProps {
  kpi_type: string;
}
