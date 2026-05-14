'use client';

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  rounded?: boolean;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = '4/5',
  className = '',
  rounded = true,
}: ImagePlaceholderProps) {
  return (
    <div
      className={`img-ph ${rounded ? 'img-ph--rounded' : ''} ${className}`}
      style={{ aspectRatio }}
    >
      <span className="img-ph__label">{label}</span>

      <style dangerouslySetInnerHTML={{__html: `
        .img-ph {
          width: 100%;
          background-color: var(--color-canvas-alt);
          border: 1px solid var(--color-divider);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .img-ph--rounded {
          border-radius: 16px;
        }

        .img-ph::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 18px,
            var(--color-divider) 18px,
            var(--color-divider) 19px
          );
          opacity: 0.6;
        }

        .img-ph__label {
          position: relative;
          font-size: 0.6875rem;
          color: var(--color-signature);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 500;
          font-family: var(--font-primary);
          text-align: center;
          padding: 0.5rem 1rem;
          background: var(--color-canvas);
          border: 1px solid var(--color-divider);
          border-radius: 999px;
        }
      `}} />
    </div>
  );
}
