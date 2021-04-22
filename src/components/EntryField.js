import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/EntryField.module.css'
import prettify from './prettify'

function EntryField({ text, defaultValue, changeValue, name, min, max, measure, cost }) {
  if (measure === '%') {
    return (
      <div className={styles.EntryField}>
        <div className={styles.FieldTitle}>{text}</div>
        <div>
          <input 
            readOnly
            className={styles.NumberInput} 
            type="text"
            value={prettify(defaultValue * cost / 100)} 
          />
          <div className={styles.PercentContainer} onChange={changeValue}>
            <input
              className={styles.PercentInput}
              type="number"
              value={defaultValue}
              name="contribution"
              onChange={() => {}}
              min={min}
              max={max}
            />
          </div>
          <input 
            className={styles.RangeInput} 
            type="range"
            name={name}
            value={defaultValue} 
            onChange={changeValue} 
            min={min} 
            max={max} 
          />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.EntryField}>
      <div className={styles.FieldTitle}>{text}</div>
      <input 
        className={styles.NumberInput} 
        type="text"
        name={name} 
        value={prettify(defaultValue)} 
        onChange={changeValue} 
        min={min} 
        max={max} 
      />
      <div className={styles.MeasureContainer}>
        {measure}
      </div>
      <input 
        className={styles.RangeInput} 
        type="range" 
        name={name} 
        value={defaultValue} 
        onChange={changeValue} 
        min={min} 
        max={max} 
      />
    </div>
  )
}

EntryField.defaultProps = {
  cost: '0',
}

EntryField.propTypes = {
  text: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  changeValue: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  measure: PropTypes.string.isRequired,
  cost: PropTypes.string,
}

export default EntryField