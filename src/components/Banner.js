import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from '../styles/Banner.module.css'
import RequestButton from './RequestButton'
import {ReactComponent as LeftArrow} from '../icons/left-arrow.svg'
import {ReactComponent as RightArrow} from '../icons/right-arrow.svg'

function Banner({ showPopUp }) {
  const [page, setPage] = useState(0)

  function move(event) {
    if (event.target.getAttribute('data-name') === 'left') {
      if (page === 0) {
        setPage(5)
      } else {
        setPage(page - 1)
      }
    } else if (page === 5) {
        setPage(0)
    } else {
        setPage(page + 1)
    }
  }

  return (
    <div className={styles.Banner}>
      <div className={`${styles.BannerSlide} ${styles.Slide0}`}>
        <BannerText 
          title="Авто в лизинг для физических лиц" 
          subtitle="Получите машину за 5 дней" 
          num={0} 
          current={page}
        />
      </div>
      <div className={`${styles.BannerSlide} ${styles.Slide1}`}>
        <BannerText 
          title="Авто для юридических лиц" 
          subtitle="Получите машину за 4 дня" 
          num={1}
          current={page}
        />
      </div>
      <div className={`${styles.BannerSlide} ${styles.Slide2}`}>
        <BannerText 
          title="Авто в лизинг" 
          subtitle="Получите машину за 3 дня" 
          num={2}
          current={page}
        />
      </div>
      <div className={`${styles.BannerSlide} ${styles.Slide3}`}>
        <BannerText 
          title="Авто в лизинг для физических лиц" 
          subtitle="Получите машину за 2 дня" 
          num={3}
          current={page}
        />
      </div>
      <div className={`${styles.BannerSlide} ${styles.Slide4}`}>
        <BannerText 
          title="Авто для юридических лиц" 
          subtitle="Получите машину за 1 день" 
          num={4}
          current={page}
        />
      </div>
      <div className={`${styles.BannerSlide} ${styles.Slide5}`}>
        <BannerText 
          title="Авто в лизинг" 
          subtitle="Получите машину сегодня!" 
          num={5}
          current={page}
        />
      </div>
      <RequestButton className={styles.RequestButton} showPopUp={showPopUp} />
      <div className={styles.Arrows}>
        <div 
          className={styles.LeftArrow} 
          role="button" 
          tabIndex="0" 
          onClick={move} 
          onKeyDown={move} 
          aria-label="Left arrow" 
          data-name="left"
        >
          <LeftArrow data-name="left"/>
        </div>
        <div 
          className={styles.RightArrow} 
          role="button" 
          tabIndex="0" 
          onClick={move} 
          onKeyDown={move} 
          aria-label="Right arrow" 
          data-name="right"
        >
          <RightArrow data-name="right"/>
          <div className={styles.Loading} />
        </div>
      </div>
      <Pagination currentPage={page}/>
    </div>
  )
}

Banner.propTypes = {
  showPopUp: PropTypes.func.isRequired,
}

function BannerText({ title, subtitle, num, current}) {
  let animation
  if (num === current) {
    animation = styles.FadeIn
  } else {
    animation = styles.FadeOut
  }
  return (
    <div className={animation}>
      <h1 className={styles.TitH1}>{title}</h1>
      <div className={styles.Subtitle}>{subtitle}</div>
    </div>
  )
}

BannerText.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
}

function Pagination() {

  return (
    <nav className={styles.Pagination}>
      <div className={styles.Pag}/>
      <div className={styles.Pag}/>
      <div className={styles.Pag}/>
      <div className={styles.Pag}/>
      <div className={styles.Pag}/>
      <div className={styles.Pag}/>
    </nav>
  )
}

export default Banner