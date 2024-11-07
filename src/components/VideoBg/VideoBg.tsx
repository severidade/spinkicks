/* eslint-disable react/react-in-jsx-scope */
import videoBg from '../../assets/video/25.mp4';
import styles from './VideoBg.module.css';

function VideoBg() {
  return (
    <div className={styles.container_videoBg}>
      <video autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoBg;
