
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="link">Demo 01</NavLink>
      <NavLink to="/demo02" className="link">Demo 02</NavLink>
    </nav>
  );
}

export default Navbar;

// className={`${styles.social_linkedin} link`}