import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav className={styles.container_nav_link}>
      <NavLink to="/" className={({ isActive }) => `${styles.nav_link} ${isActive && styles.active} link`} >
        Demo 01
      </NavLink>
      <NavLink to="/demo02" className={({ isActive }) => `${styles.nav_link} ${isActive && styles.active} link`}>
          Demo 02
      </NavLink>
    </nav>
  );
}

export default Navbar;