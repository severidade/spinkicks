import CustomCursor from "../../components/CustomCursor/CoustomCursor";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar/Navbar";
import VideoBg from "../../components/VideoBg/VideoBg";

export default function Demo01() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return(
   <div className="stage">
      <Navbar />
      {!isMobile && <CustomCursor />}
      <VideoBg />
      <h1 className="app_title">
        SpinKicks
      </h1>
      <ul className="container_gallery">
        <li className="link_img">01</li>
        <li className="link_img">02</li>
        <li className="link_img">03</li>
      </ul>
      <Footer />
    </div>
  )
}