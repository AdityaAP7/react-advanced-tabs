ewqytrewq9876543219876543210987654321import React, {
  useContext,
  KeyboardEvent,
  useCallback,
  ReactNode,
  memo
} from 'react';
import { TabsContext } from './Tabs';
interface TabProps {
12
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
   */
  onSelect?: (index: number) => void;
  /**
   * Tab button ID for a11y (if needed).
   */
  id?: string;
  /**
   * The `aria-controls` attribute for accessibility.
   */
const TabComponent: React.FC<TabProps> = ({
  index,
  children,
  className = '',
  activeClassName = '',
  disabled = false,
  onSelect,
  id,
  ariaControls
}) => {
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = activeIndex === index;
  const handleClick = useCallback(() => {
    if (disabled) return;
    setActiveIndex(index);
    onSelect?.(index);
  }, [disabled, index, onSelect, setActiveIndex]);
  const handleKeyDown = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;
    // You can handle arrow key navigation or other keys here
    // if (e.key === 'ArrowRight') { ... }
        // if (e.key === 'ArrowLeft')  { ... }

    
  }, [disabled]);
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
};export const Tab = memo(TabComponent);

