import React from 'react'
import TwitterLogo from "../../assets/twitter.png"
import InstaLogo from "../../assets/insta.png"
import FacebookLogo from "../../assets/facebook.png"
import ZidanePic from "../../assets/zidane.jpg"
import ChristianoPic from "../../assets/christiano.jpg"
import IkercasillasicPic from "../../assets/ikercasillas.jpg"
import JamesPic from "../../assets/james.jpg"
import TonyPic from "../../assets/tonikroos.jpg"
import LinkedInLogo from "../../assets/linkedin.png"
import MediumLogo from "../../assets/medium.png"
import NbaLogo from "../../assets/nba.png"
import "./Team.css"
import TeamCard from './TeamCard'

const Team = () => {
  return (
    <div id="team">
        <h2 className='teamHeading'>
            without bonding and coordination, every project is a failure. Look at who makes KICKSUP great. ;)
        </h2>
        <div className="cards">
            <TeamCard memberImg={ZidanePic} memberName="Zidane" memberRole="Leadership & Management" social1={LinkedInLogo} social2={MediumLogo} social3={FacebookLogo} />
            <TeamCard memberImg={TonyPic} memberName="Tony Kroos" memberRole="Product developer" social1={LinkedInLogo} social2={MediumLogo} />
            <TeamCard memberImg={IkercasillasicPic} memberName="Iker Casillas" memberRole="Marketing strategy" social1={MediumLogo} />
            <TeamCard memberImg={JamesPic} memberName="James" memberRole="Product designer" social1={MediumLogo} social2={NbaLogo} social3={LinkedInLogo} />
            <TeamCard memberImg={ChristianoPic} memberName="Christiano" memberRole="Financial operations" social1={LinkedInLogo} social2={FacebookLogo} />
        </div>
        <h2 className="teamHeading">
            and You! ;)
        </h2>
    </div>
  )
}

export default Team