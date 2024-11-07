/* eslint-disable react/react-in-jsx-scope */
import { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.css';

function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursorToggleElements = document.querySelectorAll('.link_menu');
    const cursorViewElements = document.querySelectorAll('.container_img');

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.pageX}px`;
        cursorRef.current.style.top = `${e.pageY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.active);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.active);
      }
    };

    const handleMouseOverView = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.active_view);
      }
    };

    const handleMouseLeaveView = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.active_view);
      }
    };

    cursorToggleElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    cursorViewElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOverView);
      el.addEventListener('mouseleave', handleMouseLeaveView);
    });

    return () => {
      cursorToggleElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });

      cursorViewElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOverView);
        el.removeEventListener('mouseleave', handleMouseLeaveView);
      });

      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div ref={cursorRef} className={styles.cursor} />
    </div>
  );
}

export default CustomCursor;
