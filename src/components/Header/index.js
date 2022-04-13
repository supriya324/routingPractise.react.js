// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="head">
    <div className="head-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="header-image"
      />
      <p className="para"> Wave</p>
    </div>

    <ul className="header-container">
      <li className="link-item">
        <Link to="/" className="route-link">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="route-link">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="route-link">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
