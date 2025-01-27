import '@/app/shared/components/Header.css';

const Header = () => (
  <header>
    <div className="header-content">
      {/* Logo Section */}
      <div className="logo_container">
        <div className="icon_cropper">
          <img src="/assets/images/brolickCutc.png" alt="logo" className="icon" />
        </div>
        <div className="title_cropper">
          <img src="/assets/images/brolickCutc.png" alt="title" className="title" />
        </div>
      </div>

      {/* Navigation Section */}
      <nav>
        <ul className="nav__links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Payment</a>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
        </ul>
      </nav>

      {/* Contact Button */}
      <a href="#" className="cta">
        <button>Contact</button>
      </a>
    </div>
  </header>
);

export default Header;
