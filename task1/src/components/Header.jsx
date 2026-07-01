function Header() {
  return (
    <div className="header">

      {/* Fake Logo */}
      <div className="logo-section">
        <div className="fake-logo">IF</div>
        
      </div>

      {/* Right Side */}
      <div className="header-right">
        <input
          type="text"
          placeholder="Search..."
        />

        <div className="profile-icon"></div>
      </div>

    </div>
  );
}

export default Header;