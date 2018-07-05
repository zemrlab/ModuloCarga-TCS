import React from 'react';
import Modal from 'react-modal';
import TableDetalles from './TableDetalles';
import '../style/style.css';
import '../style/button.css';

const InsertadosModal = (props) => (
    <Modal
        isOpen={props.detalle_insertados}
        onRequestClose={props.closeModalInsertados}
    >
        <div>
            <h1 align="center">Lista de Registros Duplicados</h1>
        </div>
        <br />
        <div className="row center-xs">
            <div className="modalwidth">
                <TableDetalles
                    lista_detalle={props.lista_detalle_insertados}
                />
            </div>
        </div>
        <br />
        <div className="row center-xs">
            <button className="myButtonCenter" onClick={props.closeModalInsertados}>Close</button>
        </div>
    </Modal>
);

export default InsertadosModal;