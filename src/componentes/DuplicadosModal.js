/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react';
import Modal from 'react-modal';
import TableDetalles from './TableDetalles';
import '../style/style.css';
import '../style/button.css';

class DetalleModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.detalle_duplicados}
                    onRequestClose={this.props.closeModalDuplicados}
                >
                    <div>
                        <h1 align="center">Lista de Registros Duplicados</h1>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <div className="modalwidth">
                            <TableDetalles
                                lista_detalle={this.props.lista_detalle_duplicados}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <button className="myButtonCenter" onClick={this.props.closeModalDuplicados}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default DetalleModal;