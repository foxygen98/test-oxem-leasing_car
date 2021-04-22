import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Calculator.module.css'
import EntryField from './EntryField'
import RequestButton from './RequestButton'
import prettify from './prettify'

function Calculator({ showPopUp }) {
  const [state, setState] = useState({
    cost: '1000000',
    contribution: '10',
    term: '1',
  })
  const firstPay = state.contribution * state.cost / 100
  const monthlyPay = state.cost - firstPay * (state.contribution / 100 / (1 + state.contribution / 100) - state.term - 1)
  const amount = firstPay + state.term * monthlyPay

  function changeValue(event) {
    event.persist()

    let { value } = event.target
    value = value.replace(/\s/g, '')
    const { min } = event.target
    const { max } = event.target
    const percentage = (value - min) / (max - min) * 100
    const nodes = event.currentTarget.parentNode.childNodes
    const len = nodes.length

    if (value > max) { 
      value = max 
    }

    setState((prev) => ({
      ...prev,
      ...{
        [event.target.name]: value,
      },
    }))

    if (nodes[len - 1].type === 'range') {
      nodes[len - 1].style.background = 
      `linear-gradient(90deg, var(--orange) ${percentage}%, #e1e1e1 ${percentage}%)`
    }
  }

  return (
    <div className={styles.Calculator}>
      <div className={styles.Title}>Рассчитайте стоимость автомобиля в лизинг</div>
      <form className={styles.FormBlock}>
        <EntryField 
          text="Стоимость автомобиля" 
          name="cost" 
          defaultValue={state.cost} 
          changeValue={changeValue}
          min="1000000"
          max="6000000"
          measure="₽"
        />
        <EntryField 
          text="Первоначальный взнос"
          name="contribution" 
          defaultValue={state.contribution} 
          changeValue={changeValue}
          min="10"
          max="60"
          measure="%"
          cost={state.cost}
        />
        <EntryField 
          text="Срок лизинга" 
          name="term" 
          defaultValue={state.term} 
          changeValue={changeValue}
          min="1"
          max="60" 
          measure="мес."
        />
      </form>
      <div className={styles.ResultsBlock}>
        <div className={styles.Results}>
          <ResultField text="Сумма договора лизинга" result={prettify(amount)}/>
          <ResultField text="Ежемесячный платеж от" result={prettify(monthlyPay)} />
        </div>
        <RequestButton className={styles.RequestButton} showPopUp={showPopUp} />
      </div>
    </div>
  )
}


Calculator.propTypes = {
  showPopUp: PropTypes.func.isRequired,
}

function ResultField({ text, result }) {
  return (
    <div className={styles.Result}>
      <div className={styles.ResultTitle}>{text}</div>
      <div className={styles.ResultNumber}>{result}</div>
    </div>
  )
}

ResultField.propTypes = {
  text: PropTypes.string.isRequired,
  result: PropTypes.string.isRequired,
}

export default Calculator