import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) =>{
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <>
        <div>
            <p>Grafica aquí</p>
        </div>

        <div>
            <p><span>Presupuesto:</span>{formatearCantidad(presupuesto)}</p>
        </div>
        <div>
            <p><span>Disponible:</span>{formatearCantidad(0)}</p>
        </div>
        <div>
            <p><span>Gastado:</span>{formatearCantidad(0)}</p>
        </div>
    </>
  )
}

export default ControlPresupuesto