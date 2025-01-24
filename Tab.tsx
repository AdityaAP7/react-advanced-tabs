
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
  /**
   * The HTML `id` attribute for the tab (can be used to match `aria-controls` of a TabPanel).
   */
  id?: string;
 /**
   * If you have a corresponding TabPanel with an id, you can place that ID here so screen readers
   * will know which panel this tab controls.
   */
 ariaControls?: string;
}
export const Tab: React.FC<TabProps> = ({
  index,
