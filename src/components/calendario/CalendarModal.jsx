import React from 'react';
import Modal from 'react-modal';
import './calendario.css'

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
  
  return (
        <div>
             <Modal
        isOpen={modalIsOpen}
        /* onAfterOpen={afterOpenModal} */
        onRequestClose={closeModal} 
        style={customStyles} 
        className="modal"
        overLayClassName="modal-fondo"
        closeTimeoutMS={ 400 }
        >
            <h3>Evento</h3>
            <hr />
            <h4>Datos</h4>
        </Modal>
        
        </div>
    )
}

export default CalendarModal;
