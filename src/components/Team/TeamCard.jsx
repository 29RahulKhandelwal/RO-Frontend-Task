import React from 'react'

const TeamCard = (props) => {
  return (
    <div className="card">
        <img className='cardImg' src={props.memberImg} alt="team-member" />
        <h2 className='memberName'>{props.memberName}</h2>
        <p className='memberRole'>{props.memberRole}</p>
        <div className="socialLinks">
            {props.social1 && <img className='social-link' src={props.social1} alt="twitter-logo" />}
            {props.social2 && <img className='social-link' src={props.social2} alt="insta-logo" />}
            {props.social3 && <img className='social-link' src={props.social3} alt="facebook-logo" />}
        </div>
    </div>
  )
}

export default TeamCard