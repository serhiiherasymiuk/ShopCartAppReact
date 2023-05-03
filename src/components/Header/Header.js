import { Link, useLocation  } from "react-router-dom";
import './Header.css';

export function Header() {
    const location = useLocation();
    return (
      <div className='Header'>
        <nav className="menu">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Products</Link>
            <Link to="/cart" className={location.pathname === '/cart' ? 'active' : ''}>Cart</Link>
        </nav>
      </div>
    );
  }
  