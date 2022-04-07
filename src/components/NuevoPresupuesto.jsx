import React, { useState } from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValidPresupuesto}) => {

    const [mensaje, setMensaje] = useState(false);

    const handleChange = e =>{
        setPresupuesto(e.target.value)
    }

    const handlePresupuesto = e =>{
        e.preventDefault();
        if(!presupuesto || presupuesto < 0){
            setMensaje('presupuesto no valido');
            return
        } 

       

        setMensaje('');
        setIsValidPresupuesto(true)

    }

  return (
    <div>
        <form
            onSubmit={handlePresupuesto}
        >
            <div>
                <label>Definir Presupuesto</label>
                <input 
                    type="number"
                    placeholder='Añade tu presupuesto'
                    value={presupuesto}
                    onChange={handleChange}
                />
            </div>

            <input type="submit"
                value="Añadir"
            />
            {mensaje && 'Presupuesto no valido'}
        </form>
    </div>
  )
}

export default NuevoPresupuesto