import {useState} from 'react';
import Formulario from './components/Formulario';

import Cita from './components/Cita';
function App() {

  //Arreglo de citas
  const [citas, guardarCitas] = useState([]);

  const crearCita = cita =>{
    guardarCitas([...citas, cita]);
  }

  const eliminarCita = id =>{
    const nuevasCitas = citas.filter(cita=>cita.id !== id);
    guardarCitas(nuevasCitas);
  }

  return (
    <>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
    <div className="row">
      <div className="one-half column">
        <Formulario crearCita={crearCita}/>
      </div>
      <div className="one-half column"><h2>Administra tus citas</h2>
      {citas.map(cita=>(
        <Cita key={cita.id} 
        cita={cita}
        eliminarCita = {eliminarCita}/>
      ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
