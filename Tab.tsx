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
   */
  onSelect?: (index: number) => void;
  /**
   * The HTML `id` attribute for the tab (can be used to match `aria-controls` of a TabPanel).
   */
  id?: string;
  /**
   * If you have a corresponding TabPanel with the same id, place that ID here so screen readers
   * know which panel this tab controls.
   */
  ariaControls?: string;
}
export const Tab: React.FC<TabProps> = ({
  index,
  children,
  className = '',
  activeClassName = '',
  disabled = false,
  onSelect,
  id,
  ariaControls,
}) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  const handleClick = () => {
    if (disabled) return; // If disabled, do nothing
    setActiveIndex(index);
    onSelect?.(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    // Example: handle arrow key navigation if needed
    // if (e.key === 'ArrowRight') { ... }
    // if (e.key === 'ArrowLeft') { ... }
  };
  return (
    <button
      role="tab"
      id={id}
      aria-controls={ariaControls}
      aria-selected={isActive}
      disabled={disabled}
      className={`${className} ${isActive ? activeClassName : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  );
