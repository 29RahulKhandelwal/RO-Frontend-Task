import React from 'react'
import journeyBg from "../../assets/grasspic.jpg"
import logo from '../../assets/websitelogo.png'
import "./Journey.css"
import JourneyHistory from './JourneyHistory'

const Journey = () => {
  return (
    <div id='journey'>
        <h2 className='journeyHeading'>THE JOURNEY</h2>
        <img className='journeyImg' src={journeyBg} alt="journey-img" />
        <div className="journeyHistory">
          <div className="histories">
            <JourneyHistory title="THE ROOTS" content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolore debitis repudiandae id eum nam quasi commodi explicabo eius aut tempora, placeat voluptatem reprehenderit quam quae recusandae quod ipsam pariatur temporibus aperiam! Accusamus rem aspernatur est fuga fugiat corporis nihil quaerat esse beatae nesciunt explicabo, quod, ea iusto voluptatibus commodi et. Error deserunt ab itaque asperiores praesentium a voluptas, dolores magnam, velit delectus est. Pariatur maxime dolore amet, cum enim a reiciendis ipsa officia doloremque nobis ipsum sapiente ipsam architecto. Est itaque repellat totam alias ratione cupiditate earum blanditiis nemo quas atque, officia dicta voluptatem aut possimus tempora! Quae, soluta." />
            <JourneyHistory title="CHAPTER I" content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis exercitationem mollitia officiis impedit ipsam obcaecati sint, numquam dolorum voluptatibus eligendi facilis alias assumenda saepe quia dolore ex fuga porro qui esse blanditiis sed similique earum molestiae! Tempora, rerum. Quos, porro quasi, nesciunt odit sint debitis neque eos totam doloremque qui obcaecati omnis. Doloribus harum fuga, mollitia, culpa natus facere optio sapiente labore eos nisi blanditiis repellat at, quisquam corporis? Illum assumenda ad sint enim nostrum in consequatur est minus mollitia." />
            <JourneyHistory title="CHAPTER II" content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea earum similique reiciendis eligendi, facere explicabo eaque qui blanditiis quasi, nesciunt et consectetur temporibus maiores repellat vel corporis quisquam expedita distinctio officia soluta. Voluptatibus dolore rem dignissimos ut ratione. Aliquid cumque quas laboriosam quaerat voluptatum temporibus sed magni, consequuntur eligendi esse? Nostrum pariatur, dolore dolorum voluptatem blanditiis praesentium provident quasi odit aut deleniti fugit eveniet omnis ratione voluptatum numquam? Quia cumque voluptatum repellendus, odio tenetur natus. Saepe aspernatur velit veritatis maxime sit unde deleniti possimus asperiores suscipit debitis placeat rerum enim magni vero officiis consectetur, corporis quidem quod maiores! Iusto expedita architecto dolore natus corrupti dolorem esse accusantium impedit molestias ab." />
            <JourneyHistory title="KICKSUP" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad earum consectetur blanditiis molestiae quibusdam fugit dolores asperiores iure, veniam ab optio rerum animi, vero commodi, dolorum architecto pariatur nemo sapiente aliquam vitae eligendi. Voluptatibus inventore in eos adipisci nulla? Saepe, libero? Libero facilis alias culpa pariatur magnam minima modi dolorum unde placeat numquam fuga nisi beatae incidunt laboriosam, ipsa voluptate eligendi dolores earum quibusdam obcaecati ab neque aliquam. Porro illo asperiores aliquam. Cupiditate rem suscipit, veritatis fugiat pariatur optio voluptas placeat eius? Quis, animi dicta! Fuga corrupti dolorem repudiandae nisi." />
            <img className='logo' src={logo} alt="logo" />
          </div>
        </div>
    </div>
  )
}

export default Journey