import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>Post Daily</Link>
      </div>
      <ul>
        <li>
          <Link to='/login'>
            <FaSignInAlt /> Login
          </Link>
        </li>
        <li>
          <Link to='/register'>
            <FaUser /> Rigister
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;