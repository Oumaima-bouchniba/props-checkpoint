import './profile.css';
import React from 'react'


function profile(props) {
    return(
        <div className="App">
        <div className='card'>
      <div className='upper-container'>
        <div className='image-container'>
            <img src='https://www.w3schools.com/howto/img_avatar2.png' alt='profileImg' height="100px" width="100px"/>
        </div>
      </div>
      <div className='lower-container'>
        <h3>{props.info.Fullname}</h3>
        <h4>Profession : {props.info.Profession}</h4>
        <h4>Bio : {props.info.Bio}</h4>
        <button onClick={()=>props.handleName(props.info.Fullname)}> see more</button>
      </div>
        
    </div>
    {props.children}     
  </div>
    )
    
}

export default profile;