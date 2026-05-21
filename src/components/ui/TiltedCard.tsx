'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import './TiltedCard.css';

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  containerWidth?: string;
  imageAspectRatio?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  borderRadius?: string;
  imagePosition?: string;
}

const springConfig = { damping: 32, stiffness: 120, mass: 1.8 };
const captionSpringConfig = { stiffness: 400, damping: 28, mass: 1 };

export default function TiltedCard({
  imageSrc,
  altText = 'Photo',
  captionText = '',
  containerWidth = '100%',
  imageAspectRatio = '4 / 5',
  rotateAmplitude = 6,
  scaleOnHover = 1.04,
  showTooltip = false,
  overlayContent = null,
  displayOverlayContent = false,
  borderRadius = '16px',
  imagePosition = 'center top',
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);
  const scale = useSpring(1, springConfig);
  const opacity = useSpring(0, { stiffness: 200, damping: 20, mass: 1 });
  const rotateFigcaption = useSpring(0, captionSpringConfig);

  const [lastY, setLastY] = useState(0);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    rotateFigcaption.set(-(offsetY - lastY) * 0.5);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tc-figure"
      style={{ width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="tc-inner"
        style={{
          rotateX,
          rotateY,
          scale,
          aspectRatio: imageAspectRatio,
          '--tc-radius': borderRadius,
        } as object}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tc-img"
          loading="lazy"
          draggable={false}
          style={{ objectPosition: imagePosition }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="tc-overlay">{overlayContent}</motion.div>
        )}
      </motion.div>

      {showTooltip && captionText && (
        <motion.figcaption
          className="tc-caption"
          style={{ x, y, opacity, rotate: rotateFigcaption }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
