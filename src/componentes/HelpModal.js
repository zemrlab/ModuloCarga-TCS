/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react';
import Modal from 'react-modal';
import '../style/style.css';

class HelpModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.help}
                    onRequestClose={this.props.handClearSelectedOption}
                >
                    <div className="row center-xs">
                        <h1 className="h1" align="center">Formatos</h1>
                    </div>
                    <div className="row center-xs">
                        <h1>Formato 1</h1>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <img className="imagenmodal" src="https://image.ibb.co/kUbMey/formato1.png" alt="Formato 1 en espera..." />
                    </div>
                    <br />
                    <br />
                    <div className="row center-xs">
                        <h1>Formato 2</h1>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <img className="imagenmodal" src="https://image.ibb.co/hENGwd/Formato_Correcto.png" alt="Formato 2 en espera..." />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row center-xs">
                        <button className="myButtonCenter" onClick={this.props.handClearSelectedOption} >Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default HelpModal;