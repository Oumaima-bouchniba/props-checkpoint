import './App.css';
import React from 'react'
import Profile from './profile/Profile';



function App() {
  const handleName = (Fullname) => {
    alert(`Hi I'am ${Fullname}`)
  }


  const info = {

    Fullname:'Oumaima bouchniba',
    Bio:'graduated as a software enginner in 2021',
    Profession:'am not working yet'

  }

  return (
    <div className="App">
      <Profile info={info} handleName={handleName}/>
    </div>
   
  );
}

export default App;
