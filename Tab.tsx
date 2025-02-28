import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
 children: React.ReactNode;
 /**
 className?: string;
  * Additional class names to apply when the tab is active.
   */

  activeClassName?: string;
export const Tab: React.FC<TabProps> = ({
