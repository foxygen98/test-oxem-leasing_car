import React from 'react'
import PropTypes from 'prop-types'

function RequestButton({ className, showPopUp }) {
  return (
    <button className={className} type="button" onClick={showPopUp} >Оставить заявку</button>
  )
}

RequestButton.propTypes = {
  className: PropTypes.string.isRequired,
  showPopUp: PropTypes.func.isRequired,
}

export default RequestButton