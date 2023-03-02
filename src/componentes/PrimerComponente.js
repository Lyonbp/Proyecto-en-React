import React from 'react'
import Ellipse from '../assets/Ellipse.png'
import Piso from '../assets/Piso.png'
import Circulo from '../assets/Circulo.png'
import Avatar from '../assets/Avatar.png'
import Bell from '../assets/Bell.png'
import Bregma from '../assets/Bregma.png'
import Perfil from '../assets/Perfil.png'
export const PrimerComponente = () => {
  return (
    <div className="modulo-busqueda">
        <img src={Ellipse} className="Ellipse"></img>
        <img src={Piso} className="Piso"></img>
        <img src={Circulo} className="Circulo"></img>
        <img src={Avatar} className="Avatar"></img>
        <img src={Bell} className="Notificaciones"></img>
        <img src={Bregma} className="Bregma"></img>
        <header className='Notificaciones-Letras'>
            <h2>Notificaciones</h2>
        </header>
        <input></input>


    </div>
    
  )
}
