import React, {
  useContext,
  KeyboardEvent,
  useCallback,
  ReactNode,
  memo
} from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
  /**
   * The index of this tab within its Tabs parent.
   */
  index: number;
  /**
   * Content of the tab (often text or an icon).
   */
  children: ReactNode;
  /**
   * Additional class name(s) for the tab button.
   */
  className?: string;
  /**
   * Class name(s) applied when the tab is active.
   */
  activeClassName?: string;
  /**
   * Disables the tab, preventing interaction.
   */
  disabled?: boolean;
  /**
   * Callback invoked when this tab is selected.
