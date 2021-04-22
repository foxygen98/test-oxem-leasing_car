import React, { useState } from 'react'
import styles from '../styles/App.module.css'
import Header from './Header'
import Banner from './Banner'
import Calculator from './Calculator'
import PopUpWindow from './PopUpWindow'
import Menu from './Menu'

function App() {
  const [popUp, setPopUp] = useState(false)
  const [menu, setMenu] = useState(false)

  function showPopUp() {
    setPopUp(!popUp)
    setMenu(false)
  }

  function showMenu() {
    setMenu(!menu)
  }

  return (
    <div className={styles.App}>
      <Header showPopUp={showPopUp} showMenu={showMenu} />
      <main className={styles.Container}>
        <Banner showPopUp={showPopUp} />
        {!popUp && <Calculator showPopUp={showPopUp} />}
      </main>
      {popUp && <PopUpWindow showPopUp={showPopUp} />}
      {menu && <Menu showMenu={showMenu} showPopUp={showPopUp} /> }
    </div>
  )
}

export default App
