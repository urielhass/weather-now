import logo from '../../assets/images/logo.svg'

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.headerNavbar}>
      <img src={logo} height="22" alt="Logo Weather Now" title="Logo Weather Now" />
    </header>
  );
}

export default Header;