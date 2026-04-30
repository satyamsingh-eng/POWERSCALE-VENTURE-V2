'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollFloatProps {
  children: React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
}

const ScrollFloat = ({
  children,
  scrollContainerRef,
  containerClassName = '',
  textClassName = '',
  animationDuration = 1,
  ease = 'back.inOut(2)',
  scrollStart = 'center bottom+=50%',
  scrollEnd = 'bottom bottom-=40%',
  stagger = 0.03
}: ScrollFloatProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');
    
    let charIndex = 0;
    return words.map((word, wordIndex) => {
      const isLastWord = wordIndex === words.length - 1;
      const wordChars = word.split('').map((char) => {
        const currentIndex = charIndex++;
        return (
          <span className="char" key={currentIndex}>
            {char}
          </span>
        );
      });
      
      // Add a space after the word unless it's the last word
      if (!isLastWord) {
        const spaceIndex = charIndex++;
        wordChars.push(
          <span className="char space" key={spaceIndex}>
            &nbsp;
          </span>
        );
      }

      return (
        <span className="word" key={wordIndex}>
          {wordChars}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Optional chaining in case scrollContainerRef is provided but not fully mounted
    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const charElements = el.querySelectorAll('.char');

    gsap.fromTo(
      charElements,
      {
        willChange: 'opacity, transform',
        opacity: 0,
        yPercent: 120,
        scaleY: 2.3,
        scaleX: 0.7,
        transformOrigin: '50% 0%'
      },
      {
        duration: animationDuration,
        ease: ease,
        opacity: 1,
        yPercent: 0,
        scaleY: 1,
        scaleX: 1,
        stagger: stagger,
        scrollTrigger: {
          trigger: el,
          scroller: scroller,
          start: scrollStart,
          end: scrollEnd,
          scrub: true
        }
      }
    );
    
    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger, splitText]);

  return (
    <>
      <h2 ref={containerRef} className={`scroll-float ${containerClassName}`}>
        <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
      </h2>
      <style dangerouslySetInnerHTML={{__html: `
        .scroll-float {
          overflow: hidden;
        }

        .scroll-float-text {
          display: inline-block;
        }

        .word {
          display: inline-block;
          white-space: nowrap;
        }

        .char {
          display: inline-block;
        }
      `}} />
    </>
  );
};

export default ScrollFloat;
