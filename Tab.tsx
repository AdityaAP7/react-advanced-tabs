
import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
  children: React.ReactNode;
  className?: string;
  className?: string;
  disabled?: boolean;
 /**
   * Callback fired when the tab is selected.
   */
  onSelect?: (index: number) => void;
