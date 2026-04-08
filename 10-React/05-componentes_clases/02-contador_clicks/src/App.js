import './stylesheets/App.css';
import Button from './componentes/button';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {
  const [numClicks, setNumsClicks] = useState(0);

  const manejarClick = () => {
    setNumsClicks(numClicks + 1);
  }

  const reiniciarContador = () => {
    setNumsClicks(0);
  }
  return (
    <div className="App">
      <div className='container-principal'>

        <h1>CONTADOR DE CLICKS</h1>
        <Contador numeroClicks={numClicks} />

        <Button 
          texto = "Click"
          BotonClick = {true}
          manejarClick = {manejarClick} />

        <Button 
          texto = "Reiniciar"
          BotonClick = {false}
          manejarClick = {reiniciarContador} />
          
      </div>

    </div>
  );
}

export default App;