// src/components/TabPanel.tsx
import React, { useContext } from 'react';
import { TabsContext } from './Tabs';
interface TabPanelProps {
  index: number;
  children: React.ReactNode;
