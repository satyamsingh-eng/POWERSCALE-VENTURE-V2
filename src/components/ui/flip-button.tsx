'use client';

import * as React from 'react';
import {
  type HTMLMotionProps,
  type Transition,
  type Variant,
  motion,
} from 'framer-motion';

import { cn } from '@/lib/utils';

type FlipDirection = 'top' | 'bottom' | 'left' | 'right';

interface FlipButtonProps extends HTMLMotionProps<'button'> {
  frontText: string;
  backText: string;
  transition?: Transition;
  frontClassName?: string;
  backClassName?: string;
  from?: FlipDirection;
}

const defaultSpanClassName = '';

const spanStyles: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--radius-pill)',
  backfaceVisibility: 'hidden',
};

const FlipButton = React.forwardRef<HTMLButtonElement, FlipButtonProps>(
  (
    {
      frontText,
      backText,
      transition = { type: 'spring', stiffness: 280, damping: 20 },
      className,
      frontClassName,
      backClassName,
      from = 'top',
      ...props
    },
    ref,
  ) => {
    const isVertical = from === 'top' || from === 'bottom';
    const rotateAxis = isVertical ? 'rotateX' : 'rotateY';

    const frontOffset = from === 'top' || from === 'left' ? '50%' : '-50%';
    const backOffset = from === 'top' || from === 'left' ? '-50%' : '50%';

    const buildVariant = (
      opacity: number,
      rotation: number,
      offset: string | null = null,
    ): Variant => ({
      opacity,
      [rotateAxis]: rotation,
      ...(isVertical && offset !== null ? { y: offset } : {}),
      ...(!isVertical && offset !== null ? { x: offset } : {}),
    });

    const frontVariants = {
      initial: buildVariant(1, 0, '0%'),
      hover: buildVariant(0, 90, frontOffset),
    };

    const backVariants = {
      initial: buildVariant(0, 90, backOffset),
      hover: buildVariant(1, 0, '0%'),
    };

    return (
      <motion.button
        ref={ref}
        initial="initial"
        whileHover="hover"
        whileTap={{ scale: 0.95 }}
        className={className}
        style={{
          position: 'relative',
          display: 'inline-block',
          cursor: 'pointer',
          perspective: '1000px',
          padding: '16px 32px',
          border: 'none',
          background: 'none',
          fontSize: 'var(--text-ui)',
          fontWeight: 'var(--weight-medium)',
        }}
        {...props}
      >
        <motion.span
          variants={frontVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            frontClassName
          )}
          style={{
            ...spanStyles,
            backgroundColor: 'var(--color-button-bg)',
            color: 'var(--color-ink-primary)'
          }}
        >
          {frontText}
        </motion.span>
        <motion.span
          variants={backVariants}
          transition={transition}
          className={cn(
            defaultSpanClassName,
            backClassName
          )}
          style={{
            ...spanStyles,
            backgroundColor: 'var(--color-ink-primary)',
            color: 'var(--color-white)'
          }}
        >
          {backText}
        </motion.span>
        <span className="invisible" style={{ opacity: 0, pointerEvents: 'none' }}>{frontText}</span>
      </motion.button>
    );
  },
);

FlipButton.displayName = 'FlipButton';

export { FlipButton, type FlipButtonProps, type FlipDirection };
