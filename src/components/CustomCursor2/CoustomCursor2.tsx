import { useEffect, useRef, useState } from 'react';
import styles from './CustomCursor2.module.css';

function CustomCursor2() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null); // Nova referência para o anel
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // Armazena a posição do cursor
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 }); // Armazena a posição do anel

  useEffect(() => {
    const cursorToggleElements = document.querySelectorAll('.link');
    const cursorViewElements = document.querySelectorAll('.link_img');

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.pageX, y: e.pageY }); // Atualiza a posição do cursor
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleMouseOver = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.active);
      }
      if (ringRef.current) {
        ringRef.current.classList.add(styles.activeRing);
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.active);
      }
      if (ringRef.current) {
        ringRef.current.classList.remove(styles.activeRing);
      }
    };

    const handleMouseOverView = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add(styles.active_view);
      }
      if (ringRef.current) {
        ringRef.current.classList.add(styles.activeRingView);
      }
    };

    const handleMouseLeaveView = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove(styles.active_view);
      }
      if (ringRef.current) {
        ringRef.current.classList.remove(styles.activeRingView);
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

  useEffect(() => {
    // Função para mover o anel suavemente
    const smoothMoveRing = () => {
      const deltaX = cursorPos.x - ringPos.x;
      const deltaY = cursorPos.y - ringPos.y;
      setRingPos({
        x: ringPos.x + deltaX * 0.1, // Move em direção ao cursor com interpolação
        y: ringPos.y + deltaY * 0.1,
      });
    };

    const interval = setInterval(smoothMoveRing, 10); // Suavidade

    return () => clearInterval(interval);
  }, [cursorPos, ringPos]);

  return (
    <div>
      <div ref={cursorRef} className={styles.cursor} style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }} />
      <div ref={ringRef} className={styles.cursorRing} style={{ left: `${ringPos.x}px`, top: `${ringPos.y}px` }} />
    </div>
  );
}

export default CustomCursor2;
