import React, { useRef, useEffect } from 'react'
import slides from './slides'
import useStyles from './styles'
import clsx from 'clsx'

const SlideShow = props => {

  const classes = useStyles()
  const slideShow = useRef(null)

  useEffect(() => {
    setInterval(() => {
      if(slideShow.current)
        nextSlide()
    }, 5000)
  },[])

  const nextSlide = () => {
    if(slideShow.current?.children.length > 0) {
      console.log("NEXT")
      const firstElement = slideShow.current.children[0]

      slideShow.current.style.transition = `500ms ease-out all`

      const slideWidth = slideShow.current.children[0].offsetWidth

      slideShow.current.style.transform = `translateX(-${slideWidth}px)`

      const transition = () => {
        slideShow.current.style.transition = 'none'
        slideShow.current.style.transform = `translateX(0)`

        slideShow.current.appendChild(firstElement)
        slideShow.current.removeEventListener('transitionend', transition)
      }

      slideShow.current.addEventListener('transitionend', transition)
    }
  }

  const previousSlide = () => {
    if(slideShow.current?.children.length > 0) {
      const index = slideShow.current.children.length - 1
      const lastElement = slideShow.current.children[index]
      slideShow.current.insertBefore(lastElement, slideShow.current.firstChild)

      slideShow.current.style.transition = 'none'
      
      const slideWidth = slideShow.current.children[0].offsetWidth
      slideShow.current.style.transform = `translateX(-${slideWidth}px)`

      setTimeout(() => {
        slideShow.current.style.transition = '500ms ease-out all'
        slideShow.current.style.transform = `translateX(0)`
      }, 30)

    }
  }


  return (
    <div className={classes.root}>
      <div className={classes.slideContainer} ref={slideShow}>
        {slides.map((e,i) => (
          <div className={classes.slide} key={i}>
            <a href={e.url}>
              <img src={e.img} alt={e.alt}/>
            </a> 
          </div>
        ))}
      </div>
      <div className={classes.controls}>
        <button className={clsx(classes.controlButton, classes.controlButtonLeft)} onClick={previousSlide}>
          <img src={`${process.env.PUBLIC_URL}/icons/arrowBack.svg`}/>
        </button>
        <button className={clsx(classes.controlButton, classes.controlButtonRight)} onClick={nextSlide}>
          <img src={`${process.env.PUBLIC_URL}/icons/arrowFoward.svg`}/>
        </button>
      </div>
    </div>
  )
}

export default SlideShow