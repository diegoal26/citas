import React, {useState} from 'react';

import {v4 as uuid} from "uuid";

const Formulario=({crearCita})=>{
    //Crear state de cita
    const [cita, actualizarCita]= useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    const actualizarState = (e) =>{
        actualizarCita({
            ...cita,
            [e.target.name]:[e.target.value]
        });
    }

    const {mascota, propietario, fecha, hora, sintomas} = cita;

    const submitCita = e =>{
        e.preventDefault();

        if(mascota[0].trim()==='' || propietario[0].trim() ===''|| fecha[0].trim() ===''|| hora[0].trim() ==='' || sintomas[0].trim() ===''){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        //Asignar ID
        cita.id = uuid();

        crearCita(cita);

        actualizarCita({ mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''});
    }

    return(<>
    <h2>Crear Cita</h2>
    {error? <p className="alerta-error">Todos los campos son obligatorios</p>: null}
    <form onSubmit={submitCita}>
        <label>Nombre Mascota</label>
        <input
        type="text"
        name="mascota"
        placeholder="Nombre mascota"
        className="u-full-width"
        onChange={actualizarState}
        value={mascota}/>

        <label>Nombre Dueño</label>
        <input
        type="text"
        name="propietario"
        placeholder="Nombre dueño de la mascota"
        className="u-full-width"
        onChange={actualizarState}
        value={propietario}/>

        <label>Fecha</label>
        <input
        type="date"
        name="fecha"
        className="u-full-width"
        onChange={actualizarState}
        value={fecha}/>

        <label>Hora</label>
        <input
        type="time"
        name="hora"
        className="u-full-width"
        onChange={actualizarState}
        value={hora}/>

        <label>Síntomas</label>
        <textarea
        name="sintomas"
        className="u-full-width"
        onChange={actualizarState}
        value={sintomas}></textarea>

        <button
        type="submit"
        className="u-full-width button-primary">Agregar Cita</button>
    </form>
    </>);
}
export default Formulario;