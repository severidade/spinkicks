/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import styles from './footer.module.css';

function Footer() {
  return (
    <footer>
      <p>
        <strong className={styles.titulo}> Tecnologias</strong>
        {' '}
        React - Javascript - TypeScript - HTML - CSS - ESLint
        {' '}
      </p>
      <p>
        Este projeto foi desenvolvido por Marco Severo e poderá ser visto
        {' '}
        <a
          className={` ${styles.external_link} link`}
          target="_blank"
          href="https://github.com/severidade/spinkicks"
          rel="noreferrer"
        >
          neste repositório
        </a>
        {' '}
        do GitHub.
      </p>
      <ul className={styles.menu_social}>
        <li>
          <a className={`${styles.social_linkedin} link`} target="_blank" href="https://www.linkedin.com/in/severidade/" rel="noreferrer">linkedin.com/in/severidade</a>
        </li>
        <li>
          <a className={`${styles.social_github} link`} target="_blank" href="https://github.com/severidade" rel="noreferrer">github.com/severidade</a>
        </li>
        <li>
          <a className={`${styles.social_behance} link`} target="_blank" href="https://www.behance.net/severidade" rel="noreferrer">behance.net/severidade</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
