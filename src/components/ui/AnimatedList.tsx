'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }: any) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.95, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.3, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ marginBottom: '1rem', cursor: 'pointer' }}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedList = ({
  items = [],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  initialSelectedIndex = -1
}: any) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleItemMouseEnter = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  const handleItemClick = useCallback(
    (item: any, index: number) => {
      setSelectedIndex(index);
      if (onItemSelect) {
        onItemSelect(item, index);
      }
    },
    [onItemSelect]
  );

  const handleScroll = useCallback((e: any) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
  }, []);

  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: any) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev: number) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev: number) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(items[selectedIndex], selectedIndex);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth'
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <>
      <div className={`scroll-list-container ${className}`}>
        <div ref={listRef} className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`} onScroll={handleScroll}>
          {items.map((item: any, index: number) => (
            <AnimatedItem
              key={index}
              delay={0.05}
              index={index}
              onMouseEnter={() => handleItemMouseEnter(index)}
              onClick={() => handleItemClick(item, index)}
            >
              <div className={`animated-list-item ${selectedIndex === index ? 'selected' : ''} ${itemClassName}`}>
                {typeof item === 'string' ? <p className="item-text">{item}</p> : item}
              </div>
            </AnimatedItem>
          ))}
        </div>
        {showGradients && (
          <>
            <div className="top-gradient" style={{ opacity: topGradientOpacity }}></div>
            <div className="bottom-gradient" style={{ opacity: bottomGradientOpacity }}></div>
          </>
        )}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .scroll-list-container {
          position: relative;
          width: 100%;
        }

        .scroll-list {
          max-height: 500px;
          overflow-y: auto;
          padding: 16px 4px;
        }

        .scroll-list::-webkit-scrollbar {
          width: 6px;
        }

        .scroll-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .scroll-list::-webkit-scrollbar-thumb {
          background: var(--color-divider);
          border-radius: 4px;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .animated-list-item {
          padding: 24px;
          background-color: var(--color-white);
          border-radius: 16px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid transparent;
        }

        .animated-list-item.selected {
          border-color: var(--color-divider);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transform: translateY(-2px);
        }

        .item-text {
          color: var(--color-ink-primary);
          margin: 0;
          font-weight: 500;
        }

        .top-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          background: linear-gradient(to bottom, var(--color-canvas), transparent);
          pointer-events: none;
          transition: opacity 0.3s ease;
          border-radius: 16px 16px 0 0;
        }

        .bottom-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to top, var(--color-canvas), transparent);
          pointer-events: none;
          transition: opacity 0.3s ease;
          border-radius: 0 0 16px 16px;
        }
      `}} />
    </>
  );
};

export default AnimatedList;
