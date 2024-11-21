import { useState, useEffect } from 'react';

/**
 * Custom Hook para carregar o vídeo e gerenciar o estado de carregamento.
 * @param {string} videoSrc - Caminho do vídeo a ser carregado.
 * @param {string} [grainSrc] - Caminho OPCIONAL da textura de grão.
 * @returns {boolean} - Estado indicando se o vídeo foi carregado.
 */

export default function useLoader2(videoSrc: string, grainSrc?: string): boolean {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.preload = 'auto';
    videoElement.src = videoSrc;

    videoElement.load(); //força explicitamente o início do carregamento do vídeo

    const textureImage = grainSrc ? new Image() : null;
    if (textureImage && typeof grainSrc === 'string') {
      textureImage.src = grainSrc;
    }

    const checkLoaded = () => {
      const videoLoaded = videoElement.readyState >= 2; // HAVE_CURRENT_DATA
      const textureLoaded = !textureImage || textureImage.complete;
      
      if (videoLoaded && textureLoaded) {
        setIsPageLoaded(true);
      }
    };

    videoElement.addEventListener('loadedmetadata', checkLoaded);


    if (textureImage) {
      textureImage.onload = checkLoaded;
    }

    return () => {
      videoElement.removeEventListener('loadedmetadata', checkLoaded);
      videoElement.pause();
      videoElement.src = '';
      setIsPageLoaded(false);
      
      if (textureImage) {
        textureImage.onload = null;
      }
    };
  }, [videoSrc, grainSrc]);

  return isPageLoaded;
}