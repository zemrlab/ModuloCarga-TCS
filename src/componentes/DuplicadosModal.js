import React from 'react';
import Modal from 'react-modal';
import TableDetalles from './TableDetalles';
import '../style/style.css';
import '../style/button.css';

const DetalleModal = (props) => (
    <Modal
        isOpen={props.detalle_duplicados}
        onRequestClose={props.closeModalDuplicados}
    >
        <div>
            <h1 align="center">Lista de Registros Duplicados</h1>
        </div>
        <br />
        <div className="row center-xs">
            <div className="modalwidth">
                <TableDetalles
                    lista_detalle={props.lista_detalle_duplicados}
                />
            </div>
        </div>
        <br />
        <div className="row center-xs">
            <button className="myButtonCenter" onClick={props.closeModalDuplicados}>Close</button>
        </div>
    </Modal>
);

export default DetalleModal;