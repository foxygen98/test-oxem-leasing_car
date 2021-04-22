import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Header.module.css'
import {ReactComponent as LogoBlack} from '../icons/logo-black.svg'
import {ReactComponent as LogoWhite} from '../icons/logo-white.svg'
import RequestButton from './RequestButton'
import {ReactComponent as MenuButton} from '../icons/menu-button.svg'
import {ReactComponent as MenuButtonWhite} from '../icons/menu-button-white.svg'

function Header({ showPopUp, showMenu }) {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <LogoBlack className={styles.LogoBlack} />
        <LogoWhite className={styles.LogoWhite} />
        <hr className={styles.Line} />
        <div className={styles.Title}>лизинговая компания</div>
        <nav className={styles.Navigation}>
          <span className={styles.DropDown}>
            <a className={styles.Link} href="/lease">Лизинг</a>
            <div className={styles.DropDownMenu}>
              <a href="/" className={styles.DropDownMenuLink}>Для личного пользования</a>
              <a href="/" className={styles.DropDownMenuLink}>Для юридических лиц</a>
              <a href="/" className={styles.DropDownMenuLink}>Калькулятор</a>
            </div>
          </span>
          <a className={styles.Link} href="/catalog">Каталог</a>
          <a className={styles.Link} href="/about_us">О нас</a>
        </nav>
        <RequestButton className={styles.RequestButton} showPopUp={showPopUp} />
        <MenuButton className={styles.MenuButton} onClick={showMenu} />
        <MenuButtonWhite className={styles.MenuButtonWhite} onClick={showMenu} />
      </div>
    </header>
  )
}

Header.propTypes = {
  showPopUp: PropTypes.func.isRequired,
  showMenu: PropTypes.func.isRequired,
}

export default Header