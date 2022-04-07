import React from 'react'

const Modal = ({setModal}) => {

    const ocultarModal = ()=>{
        setModal(false)
    }

  return (
    <div className='modal'>
        <p>Hola</p>
        <div>
            <button
                onClick={ocultarModal}
                className="cerrarModal"
            >Cerrar Modal</button>
        </div>
    </div>
  )
}

export default Modal