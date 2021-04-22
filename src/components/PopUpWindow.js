/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/PopUpWindow.module.css'
import RequestButton from './RequestButton'
import {ReactComponent as TG} from '../icons/tg-icon.svg'
import {ReactComponent as WA} from '../icons/whatsapp-icon.svg'

function PopUpWindow({ showPopUp }) {
  const [phoneAct, setPhoneAct] = useState(false)
  const [nameAct, setNameAct] = useState(false)
  const [state, setState] = useState({
    phone: '+7(___)___-__-__',
    name: '',
  })
  let dataPhone
  let dataName
  const focusStyles = `
    border: 1px solid var(--orange);
    border-radius: 16px;
    box-shadow: 0 0 0 4px var(--orange-opacity-2);
    background-color: var(--bgc);
  `

  const blurStyles = `
    background-color: var(--hover-nav);
    border: 1px solid var(--hover-nav);
    border-radius: 16px;
  `

  if (phoneAct === true) {
    dataPhone = 'Телефон *'
  } else {
    dataPhone = ''
  }

  if (nameAct === true) {
    dataName = 'Имя'
  } else {
    dataName = ''
  }

  function focus(event) {
    event.target.parentNode.style = focusStyles
    event.target.style.paddingTop = '24px'
    if (event.target.name === 'name') {
      setNameAct(true)
      setPhoneAct(false)
    } else {
      setPhoneAct(true)
      setNameAct(false)
    }
  }

  function blur(event) {
    event.target.parentNode.style = blurStyles
    event.target.style.paddingTop = '0px'
    setNameAct(false)
    setPhoneAct(false)
  }

  function changeInputHandler(event) {
    event.persist()
    setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: event.target.value,
      },
    }))
  }
  
  // Попытки добавить маску, но курсор пока не удалось сдвигать
  //
  // function setCursorPosition(pos, e) {
  //   e.focus()
  //   if (e.setSelectionRange) e.setSelectionRange(pos, pos)
  //   else if (e.createTextRange) {
  //     const range = e.createTextRange()
  //     range.collapse(true)
  //     range.moveEnd("character", pos)
  //     range.moveStart("character", pos)
  //     range.select()
  //   }
  // }

  // function mask(event) {
  //   let matrix = event.target.placeholder
  //   let i = 0
  //   const def = matrix.replace(/\D/g, "")
  //   // eslint-disable-next-line react/no-this-in-sfc
  //   let val = event.target.value.replace(/\D/g, "")
  //   // eslint-disable-next-line no-unused-expressions
  //   def.length >= val.length && (val = def)
  //   // eslint-disable-next-line no-return-assign
  //   matrix = matrix.replace(/[_\d]/g, () => val.charAt(i+=1) || "_")
  //   // eslint-disable-next-line react/no-this-in-sfc
  //   event.target.value = matrix
  //   i = matrix.lastIndexOf(val.substr(-1))
  //   // eslint-disable-next-line react/no-this-in-sfc
  //   i < matrix.length && matrix !== event.target.placeholder ? i+=1 : i = matrix.indexOf("_")
  //   setCursorPosition(i, event.target)
  // }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.PopUpContainer}>
        <div 
          className={styles.Close}
          role="button" tabIndex="0"
          aria-label="close button"
          onClick={showPopUp}
          onKeyDown={showPopUp}
        />
        <form className={styles.FormContainer}>
          <div className={styles.Text}>
            <div className={styles.Title}>Онлайн-заявка</div>
            <div className={styles.Subtitle}>Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все вопросы</div>
          </div>
          <div className={styles.InputFields}>
            <div className={styles.InputField} data-title={dataPhone}>
              <input 
                required
                type="tel"
                name="phone"
                value={state.phone}
                placeholder="+7(___)___-__-__"
                className={styles.Input}
                onFocus={focus}
                onBlur={blur}
                onChange={changeInputHandler}
                pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                // onInput={mask}
              />
            </div>
            <div className={styles.InputField} data-title={dataName}>
              <input
                required
                type="text"
                name="name"
                value={state.name}
                placeholder="Имя"
                className={styles.Input}
                onFocus={focus}
                onBlur={blur}
                onChange={changeInputHandler}
              />
            </div>
          </div>
          <div className={styles.Request}>
            <div className={styles.RequestInfo}>Нажимая на кнопку «Оставить заявку»,  я даю согласие <span className={styles.BlackText}>на обработку персональных данных</span></div>
            <RequestButton className={styles.RequestButton} showPopUp={showPopUp} />
          </div>
          <div className={styles.SocialNet}>
            <a href="#wa" aria-label="Whatsapp" className={styles.SocialIcon}><WA /></a>
            <a href="#tg" aria-label="Telegram" className={styles.SocialIcon}><TG /></a>
          </div>
        </form>
      </div>
    </div>
  )
}

PopUpWindow.propTypes = {
  showPopUp: PropTypes.func.isRequired,
}

export default PopUpWindow