import { useState } from "react";

const Modal = ({setModal}) => {

    const [inputsFormulario, setInputsFormulario] = useState({
        nombre: '',
        cantidad: '',
        categoria: ''
    })

    const {nombre, cantidad, categoria} = inputsFormulario;

    const handleChange = e =>{
        setInputsFormulario({
            ...inputsFormulario,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(inputsFormulario);
    }

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

        <form
            className='formulario'
            onSubmit={handleSubmit}
        >
            <legend>Nuevo Gasto</legend>

            <div className='input-form'>
                <label htmlFor="nombre">Nombre Gasto</label>
                <input
                    type="text"
                    placeholder='Añade el Nombre del gasto'
                    id='nombre'
                    name="nombre"
                    value={nombre}
                    onChange={handleChange}
                />
            </div>

            <div className='input-form'>
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    type="number"
                    placeholder='Añade la cantidad del gasto'
                    id='cantidad'
                    name="cantidad"
                    value={cantidad}
                    onChange={handleChange}
                />
            </div>

            <div className='input-form'>
                <label htmlFor="categoria">Categoria</label>
                <select
                    id='categoria'
                    name="categoria"
                    value={categoria}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos</option>
                    <option value="salud">Salud</option>
                    <option value="vicios">Vicios</option>
                </select>
            </div>

            <input
                type="submit"
                value="Añadir Gasto"
                className='input-submit'
             />

        </form>
    </div>
  )
}

export default Modal