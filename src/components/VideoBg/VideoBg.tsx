import styles from './VideoBg.module.css';
interface VideoBgProps {
  videoSrc: string;
}

const VideoBg = ({ videoSrc }: VideoBgProps) => {
  return (
    <div className={styles.container_videoBg}>
      <video autoPlay loop muted>
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoBg;