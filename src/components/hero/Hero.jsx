import React from 'react'
import "./hero.scss"
const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">

      <div className="textContainer">
        <h2>Govind Prasad</h2>
        <h1>Software developer</h1>
        <div className="buttons">
          <button>Resume</button>
          <button>
            Contact as
          </button>
        </div>
        <img src="/scroll.png" alt="" />
      </div>
      </div>
      <div className="imageContainer">
        <img src="/coder1.jpg" alt="" />
      </div>
    </div>
  )
}

export default Hero
