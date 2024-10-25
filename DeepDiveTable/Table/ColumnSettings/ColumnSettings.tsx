import React from 'react';
import { Header } from './Header';
import { Wrapper, ContentContainer } from './ColumnSettings.styles';
import { KPISelect } from './KPISelect';
import { OrderingSelect } from './OrderingSelect';
import { Footer } from './Footer';
import { useDeepDiveContext } from '../../lib';

interface ColumnSettingsProps {
  handleClose: () => void;
}

export const ColumnSettings = React.memo<ColumnSettingsProps>(
  ({ handleClose }) => {
    const { kpis, pinned_kpis, handleKpisChange, handlePinnedKpisChange } =
      useDeepDiveContext();
    const [selected, setSelected] = React.useState([...pinned_kpis, ...kpis]);
    const [columns, setColumns] = React.useState({
      pinned: pinned_kpis,
      unpinned: kpis,
    });

    const handleChange = React.useCallback((value: string) => {
      setSelected(prev => {
        if (prev.includes(value)) {
          return prev.filter(v => v !== value);
        }
        return [...prev, value];
      });
      setColumns(prev => ({
        pinned: prev.pinned.includes(value)
          ? prev.pinned.filter(v => v !== value)
          : prev.pinned,
        unpinned: prev.unpinned.includes(value)
          ? prev.unpinned.filter(v => v !== value)
          : prev.pinned.includes(value)
          ? prev.unpinned
          : [...prev.unpinned, value],
      }));
    }, []);

    const handleApply = React.useCallback(() => {
      handleKpisChange(columns.unpinned);
      handlePinnedKpisChange(columns.pinned);
    }, [handleKpisChange, handlePinnedKpisChange, columns]);

    const handleReset = React.useCallback(() => {
      setSelected(kpis);
      setColumns({
        pinned: pinned_kpis,
        unpinned: kpis,
      });
    }, [kpis, pinned_kpis]);

    return (
      <Wrapper>
        <Header handleClose={handleClose}></Header>
        <ContentContainer>
          <KPISelect selected={selected} handleChange={handleChange} />
          <OrderingSelect
            columns={columns}
            setColumns={setColumns}
            handleRemove={handleChange}
          />
        </ContentContainer>
        <Footer
          handleClose={handleClose}
          handleApply={handleApply}
          handleReset={handleReset}
        />
      </Wrapper>
    );
  },
);
