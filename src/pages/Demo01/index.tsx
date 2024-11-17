import { useState, useEffect } from 'react';
import CustomCursor from "../../components/CustomCursor/CoustomCursor";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VideoBg from "../../components/VideoBg/VideoBg";
import video from "../../assets/video/25.mp4"
import grainTexture from '../../assets/texture/dots_01.png';

export default function Demo01() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const videoElement = document.createElement('video');
    videoElement.src = video;
    
    const handleLoadedData = () => {
      setIsPageLoaded(true);
      videoElement.removeEventListener('loadeddata', handleLoadedData);
    };

    videoElement.addEventListener('loadeddata', handleLoadedData);

    return () => {
      videoElement.removeEventListener('loadeddata', handleLoadedData);
      setIsPageLoaded(false);
    };
  }, []);

  return (
    <div className="stage">
      {isPageLoaded ? (
        <>
          <Navbar />
          {!isMobile && <CustomCursor />}
          <VideoBg videoSrc={video} grainSrc={grainTexture} />
          <h1 className="app_title">
            SpinKicks
          </h1>
          <ul className="container_gallery">
            <li className="link_img">01</li>
            <li className="link_img">02</li>
            <li className="link_img">03</li>
          </ul>
          <Footer />
        </>
      ) : (
        <div className="loading">Carregando...</div>
      )}
    </div>
  );
}