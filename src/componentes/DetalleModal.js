import React from 'react';
import Modal from 'react-modal';
import TableDuplicados from './TableDuplicados';
import '../style/style.css';
import '../style/button.css';

const DetalleModal = (props) => (
    <Modal
        isOpen={props.detalle}
        onRequestClose={props.closeModalDetalle}
    >
        <div>
            <h1 align="center">Lista de Registros Duplicados</h1>
        </div>
        <br/>
        <TableDuplicados
            lista_detalle = {props.lista_detalle}
        />
        <br/>
        <div className="row center-xs">
            <button className="myButtonCenter" onClick={props.closeModalDetalle}>Close</button>
        </div>
    </Modal>
);

export default DetalleModal;