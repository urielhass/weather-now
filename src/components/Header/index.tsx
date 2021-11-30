import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <header className="header-navbar">
      <img src={logo} height="34" alt="Logo Weather Now" title="Logo Weather Now" />
    </header>
  );
}

export default Header;