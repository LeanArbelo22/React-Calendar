import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Modal from 'react-modal';
import moment from 'moment';
import Swal from 'sweetalert2'
import './calendario.css';
//import Calendar from 'react-calendar';
//import 'react-datetime-picker/dist/DateTimePicker.css'
//import 'react-calendar/dist/Calendar.css'
//import 'react-clock/dist/Clock.css' NO INSTALADO

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const value = moment();
const value1 = value.clone().add(1, 'day');

const CalendarModal = () => {

  Modal.setAppElement('#root');

  const [modalIsOpen, setIsOpen] = React.useState(true);
  /* function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
  } */
  function closeModal() {
    setIsOpen(false);
  }

  //atributos de fechas de inicio y fin de eventos
  const [dateStart, setDateStart] = useState(value.toDate());
  const [dateEnd, setDateEnd] = useState(value1.toDate());
  const [formValues, setFormValues] = useState({
    title: '',
    notes: '', 
    start: value.toDate(),
    end: value1.toDate()
  })
  const {title, notes, start, end} = formValues;

  const onChange = (e) => {
    setDateStart(e)
    console.log(e);
    setFormValues({
      ...formValues,
      start: e
    })
  }
  const onEnd = (e) => {
    setDateEnd(e)
    console.log(e);
    setFormValues({
      ...formValues,
      end: e
    })
  }
  // formulario
  const handleSubmit = (e) => {
      e.preventDefault();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Evento guardado correctamente',
        showConfirmButton: false,
        timer: 1600
      })
  }
  const handleChange = ({ target }) => {
      console.log(target.value);
      setFormValues({
        ...formValues,
        [target.name]: target.value
      })
  }

  return (
    <div>
      <Modal
        isOpen={ modalIsOpen }
        /* onAfterOpen={afterOpenModal} */
        onRequestClose={ closeModal }
        style={ customStyles }
        className="modal"
        overLayClassName="modal-fondo"
        closeTimeoutMS={400}>

        <h1 className="modal-title"> Nuevo evento </h1>
        <hr />
        <form 
          className="container"
          onSubmit={ handleSubmit }
        >
          <div className="form-group">
            <label>Inicio</label>
            {/* <input className="form-control" placeholder="Fecha inicio" type="date"/> */}
            <DateTimePicker
              className=""
              onChange={ onChange }
              value={ dateStart }
            />
          </div>
          <div className="form-group">
            <label>Fin</label>
            {/* <input className="form-control" placeholder="Fecha finalizacion" type="date" /> */}
            <DateTimePicker
              className=""
              onChange={ onEnd }
              value={ dateEnd }
              minDate= { dateStart }
            />
          </div>
          <hr />
          <div className="form-group">
            <label>Titulo y notas</label>
            <input
              type="text"
              className="form-control"
              placeholder="Título del evento"
              name="title"
              autoComplete="off"
              onChange={ handleChange }
              value={ title }
            />
            <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Notas"
              rows="5"
              name="notes"
              onChange={ handleChange }
              value={ notes }
            ></textarea>
            <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary btn-block w-100 m-1"
          >
            <i className="far fa-save"></i>
            <span> Guardar</span>
          </button>
        </form>

      </Modal>

    </div>
  )
}

export default CalendarModal;
