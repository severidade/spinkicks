import CustomCursor from "../../components/CustomCursor/CoustomCursor";
import Footer from "../../components/Footer";
import VideoBg from "../../components/VideoBg/VideoBg";

export default function Demo02() {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return(
   <div className="stage">
      {!isMobile && <CustomCursor />}
      <VideoBg />
      <h1 className="app_title">
        SpinKicks 02
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