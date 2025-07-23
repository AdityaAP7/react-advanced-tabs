098765432143211109876543212187654321// src/components/TabPanel.tsx
import React, { useContext } from 'react';
import { TabsContext } from './Tabs';
interface TabPanelProps {
  index: number;
  children: React.ReactNode;
  className?: string;
}
export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
  const { activeIndex } = useContext(TabsContext);
  if (activeIndex !== index) {
    return null;
}
  return (
    <div className={`tab-panel ${className || ''}`}>
      {children}
   </div>
  );
};
import React, { useContext } index: number; { TabsContext } from './interface TabPanelProps {


