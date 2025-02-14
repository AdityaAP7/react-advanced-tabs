import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
  children: React.ReactNode;
  /**
   * Additional class names to apply to the tab.
   */
