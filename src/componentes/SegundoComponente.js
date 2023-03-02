import React from 'react'
import Perfil from '../assets/Perfil.png'
import Productos from '../assets/Productos.png'
import Operaciones from '../assets/Operaciones.png'
import Ventas from '../assets/Ventas.png'
import Recursos from '../assets/RecursosHumanos.png'
import Contabilidad from '../assets/Contabilidad.png'
import Estadisticas from '../assets/Estadisticas.png'
import Soporte from '../assets/SoporteTecnico.png'
import Cerrar from '../assets/Session-Leave.png'
export const SegundoComponente = () => {
  return (
  
    <div className='Items'>
        <a><img src={Perfil} className="Perfil"></img>Perfil</a>
        <a><img src={Productos} className="Productos"></img>Productos y Servicios</a>
        <a><img src={Operaciones} className="Operaciones"></img>Operaciones</a>
        <a><img src={Ventas} className="Ventas"></img>Ventas</a>
        <a><img src={Recursos} className="Recursos"></img>Recursos Humanos</a>
        <a><img src={Contabilidad} className="Contabilidad"></img>Contabilidad</a>
        <a><img src={Estadisticas} className="Estadisticas"></img>Estadisticas</a>
        <a><img src={Soporte} className="Soporte"></img>Soporte Tecnico</a>
        <a className='Cerrars'><img src={Cerrar} className="Cerrar"></img>CerrarSesion</a>
    </div>
   
  )
}
