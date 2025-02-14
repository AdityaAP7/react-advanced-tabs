import React, { useContext, KeyboardEvent } from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  index: number;
  children: React.ReactNode;
  /**
   * Additional class names to apply to the tab.
   */
  className?: string;
  /**
   * Additional class names to apply when the tab is active.

   */
  activeClassName?: string;
  /**
   * Disables the tab, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Callback fired when the tab is selected.
