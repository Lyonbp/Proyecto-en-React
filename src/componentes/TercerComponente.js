import React from 'react'
import Ubicacion from '../assets/Map-Pin.png'
import Circulo1 from '../assets/Circulo1.png'
import Circulo2 from '../assets/Circulo2.png'
import Circulo3 from '../assets/Circulo3.png'
import Circulo4 from '../assets/Circulo4.png'
import Circulo5 from '../assets/Circulo5.png'
import Circulo6 from '../assets/Circulo6.png'
import Grid from '../assets/Grid.png'
import User from '../assets/User.png'
import Users from '../assets/Users.png'
import Shopping from '../assets/Shopping-bag-2.png'
import Share from '../assets/Share.png'
export const TercerComponente = () => { 

    return (
  
      <div className='Loguitos'>
        <div className='b1'>
          <img src={Circulo1} className="Circulo1"></img>
          <img src={Ubicacion} className="Ubicacion"></img>
        </div>
        <div className='b2'>
          <img src={Circulo6} className="Circulo6"></img>
          <img src={Grid} className="Grid"></img>
        </div>
        <div className='b3'>
          <img src={Circulo5} className="Circulo5"></img>
          <img src={User} className="User"></img>
        </div>
        <div className='b4'>
          <img src={Circulo4} className="Circulo4"></img>
          <img src={Users} className="Users"></img>
        </div>
        <div className='b5'>
        <img src={Circulo3} className="Circulo3"></img>
        <img src={Shopping} className="Shopping"></img>
        </div>
        <div className='b6'>
          <img src={Circulo2} className="Circulo2"></img>
          <img src={Share} className="Share"></img>
        </div>
      </div>
   
    )
  
}
