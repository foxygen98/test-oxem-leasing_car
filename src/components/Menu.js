import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Menu.module.css'
import RequestButton from './RequestButton'
import {ReactComponent as MenuCloseButton} from '../icons/menu-close-button.svg'

function Menu({ showPopUp, showMenu }) {

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Menu}>
        <MenuCloseButton className={styles.MenuCloseButton} onClick={showMenu} />
        <div className={styles.LinkList}>
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
        </div>
        <span className={styles.RequestButtonContainer}>
          <RequestButton className={styles.RequestButton} showPopUp={showPopUp} />
        </span>
      </div>
    </div>
  )
}

Menu.propTypes = {
  showPopUp: PropTypes.func.isRequired,
  showMenu: PropTypes.func.isRequired,
}

export default Menu
