import { useState } from "react";
import Header from "./components/Header";



function App() {

  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);

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
          <button>Nuevo Presupuesto</button>
        )}
      </div>
    </div>
  );
}

export default App;
