import React from 'react'
import './about.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='aboutPage'>
      <h2>Don't squeeze in a sedan when you could 
        relax in a van</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. In dolores, voluptas 
            numquam veritatis perferendis 
            est ex laudantium modi eos dolorem.
            </p>
            <p>Lorem ipsum, dolor sit 
                amet consectetur 
                adipisicing elit. Praesentium, eos.
                </p>
                <div className="explore_our_vans_box">
                    <h4>Your destintion is waiting <br /> Your van is ready</h4>
                    <Link to='/vans'><button>Explore vans</button></Link>
                </div>
    </div>
  )
}

export default About
