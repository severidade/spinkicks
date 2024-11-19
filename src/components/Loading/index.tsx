import styles from "./loading.module.css"

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} />
      <div className={styles.loading_text}>Carregando</div>
    </div>
  );
}