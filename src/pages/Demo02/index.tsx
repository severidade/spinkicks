import Navbar from "../../components/Navbar/Navbar";
import VideoBg from "../../components/VideoBg/VideoBg";
import CustomCursor2 from "../../components/CustomCursor2/CoustomCursor2";
import Footer from "../../components/Footer";

import video from "../../assets/video/26.webm"
import grainTexture from '../../assets/texture/noise.png';

export default function Demo02() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return(
   <div className="stage">
      <Navbar />
      {!isMobile && <CustomCursor2 />}
      <VideoBg videoSrc={video}  grainSrc={grainTexture}/>
      <h1 className="app_title">
        SpinKicks
      </h1>
      {isMobile ? (
            <div className="mobile-warning"> 
              <h3>Ops, seu celular não vai curtir essa página!</h3>
              <p>Ela usa um <strong>recurso</strong> que só funciona em desktop. Acessar por lá vai ser muito mais divertido!</p>
            </div>
          ) : (
            <ul className="container_gallery">
              <li className="link_img">01</li>
              <li className="link_img">02</li>
              <li className="link_img">03</li>
            </ul>
          )}
      <Footer />
    </div>
  )
}