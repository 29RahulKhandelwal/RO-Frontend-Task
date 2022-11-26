import React from 'react'
import TwitterLogo from "../../assets/twitter.png"
import InstaLogo from "../../assets/insta.png"
import FacebookLogo from "../../assets/facebook.png"
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
      <div className="reach-us">
        <h2 className='heading'>REACH US AT</h2>
        <div className="info">
          <h2 className='subHeading'>support@kicksup.com</h2>
          <p className='subPara'>for any technical support</p>
        </div>
        <div className="info">
          <h2 className='subHeading'>info@kicksup.com</h2>
          <p className='subPara'>for more information</p>
        </div>
        <div className="info">
          <h2 className='subHeading'>feedback@kicksup.com</h2>
          <p className='subPara'>to send your feedback</p>
        </div>
        <div className="info">
          <h2 className='subHeading'>jobs@kicksup.com</h2>
          <p className='subPara'>to work with us</p>
        </div>
      </div>
      <div className="social-links">
        <p className='socialPara'>stay in touch</p>
        <img className='social-link' src={TwitterLogo} alt="twitter-logo" />
        <img className='social-link' src={InstaLogo} alt="insta-logo" />
        <img className='social-link' src={FacebookLogo} alt="facebook-logo" />
      </div>
    </div>
  )
}

export default Contact