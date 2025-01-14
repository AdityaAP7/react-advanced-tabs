// src/components/TabPanel.tsx
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
    }    className?: string;
  }
  export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
    const { activeIndex } = useContext(TabsContext);
    if (activeIndex !== index) {
    return (
      <div className={`tab-panel ${className || ''}`}>
  export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
    const { activeIndex } = useContext(TabsContext);
    if (activeIndex !== index) {
        return null;
    }    className?: string;
  }
{children}export const TabPanel: React.FC<TabPanelProps> = ({ index, children, className }) => {
    const { activeIndex } = useContext(TabsContext);
    if (activeIndex !== index) {
        return null;
    }    className?: string;
  }
    </div>
  );
};
