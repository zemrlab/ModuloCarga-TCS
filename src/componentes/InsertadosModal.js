import React from 'react';
import Modal from 'react-modal';
import TableDetalles from './TableDetalles';
import '../style/style.css';
import '../style/button.css';

class InsertadosModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.detalle_insertados}
                    onRequestClose={this.props.closeModalInsertados}
                >
                    <div>
                        <h1 align="center">Lista de Registros Duplicados</h1>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <div className="modalwidth">
                            <TableDetalles
                                lista_detalle={this.props.lista_detalle_insertados}
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <button className="myButtonCenter" onClick={this.props.closeModalInsertados}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default InsertadosModal;