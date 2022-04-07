import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  const handleNuevoGasto = ()=>{
    setModal(true);
  }

  return (
    <div>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />

      <div>
        {isValidPresupuesto && (
          <button
            onClick={handleNuevoGasto}
          >Nuevo Presupuesto</button>
        )}
      </div>

      {modal &&
       <Modal
       setModal={setModal}
       />}

    </div>
  );
}

export default App;
