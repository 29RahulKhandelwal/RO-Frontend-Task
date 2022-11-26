import React from 'react'

const JourneyHistory = (props) => {
  return (
    <div className='history'>
        <h2 className='journeySubHeading'>{props.title}</h2>
        <p className='journeyPara'>{props.content}</p>
    </div>
  )
}

export default JourneyHistory