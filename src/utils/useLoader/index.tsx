import { useState, useEffect } from 'react';

/**
 * Custom Hook para carregar o vídeo e gerenciar o estado de carregamento.
 * @param {string} videoSrc - Caminho do vídeo a ser carregado.
 * @returns {boolean} - Estado indicando se o vídeo foi carregado.
 */

export default function useLoader(videoSrc: string) : boolean{
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.preload = 'auto';
    videoElement.src = videoSrc;

    videoElement.load();

    const handleLoadedData = () => {
      setIsPageLoaded(true);
      // setTimeout(() => {
      //   setIsPageLoaded(true);
      //   console.log('Page is now loaded.');
      // }, 3000);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      videoElement.pause();
      videoElement.src = '';
      setIsPageLoaded(false);
    };
  }, [videoSrc]);

  return isPageLoaded;
}
