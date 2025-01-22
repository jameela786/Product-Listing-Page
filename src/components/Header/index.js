import {Link} from 'react-router-dom'
import {
  IoSearch,
  IoHeartOutline,
  IoBagRemoveOutline,
  IoPersonOutline,
} from 'react-icons/io5'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'; 

import './index.css'

const Header = () => {

  const navigate = useNavigate();

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    navigate('/login');
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-large-container">
          <Link to="/">
            <img
              className="website-logo"
              src="https://res.cloudinary.com/dd3phabkh/image/upload/v1737463788/Logo_xpv80t.png"
              alt="website logo"
            />
          </Link>
          <div className="header_logo">
            <h1>LOGO</h1>
          </div>
          <div>
            <ul className="nav-menu">
              <li className="nav-menu-item">
                <Link
                  to="/"
                  className="nav-link"
                  data-testid="desktop-home-link"
                >
                  <IoSearch size={24} />
                </Link>
              </li>

              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  <IoHeartOutline size={24} />
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  <IoBagRemoveOutline size={24} />
                </Link>
              </li>
              <li className="nav-menu-item">
                <Link to="/" className="nav-link">
                  <IoPersonOutline size={24} />
                </Link>
              </li>
              <li className="nav-menu-item" data-testid="desktop-logout-btn">
                <button
                  type="button"
                  className="logout-desktop-btn"
                  onClick={onClickLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="tab_container">
        <li className="each_tab">SHOP</li>
        <li className="each_tab">SKILLS</li>
        <li className="each_tab">STORIES</li>
        <li className="each_tab">ABOUT</li>
        <li className="each_tab">CONTACT US</li>
      </ul>
    </nav>
  )
}

export default Header
