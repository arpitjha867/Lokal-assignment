import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <div>
        <div className='backGround'>
        <div className="container">

        <h1 className="headingAbout text-light" >About us</h1>
        </div>
        <hr className='bg-light' />
        <div className="container py-4 px-4 text-light" >
            This web application provides latest news bits on the go which you can read  from wherever and whenever you want . You can select certain category to get personalised news that you want to see. 
            More features will be added soon.
            <br />
            <br />
            Developer:
            <br />
            Arpit Jha 
            <br />
            <a href='https://github.com/arpitjha867' target="_blank" rel="noreferrer">Github</a>
            <br />
            <a href='https://www.linkedin.com/in/arpit-jha-385ba4190/' target="_blank" rel="noreferrer">LinkedIn</a>
            <br />
            <a href='https://arpitjha867.github.io/arpitjha.github.io/' target="_blank" rel="noreferrer">Website</a>
        </div>
    </div>
      </div>
    )
  }
}

export default About
