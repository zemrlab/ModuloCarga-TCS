import React from 'react';
import Modal from 'react-modal';

class HelpModal extends React.Component {
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.help}
                    onRequestClose={this.props.handClearSelectedOption}
                >
                    <div className="row center-xs">
                        <h1 className="h1" align="center">Formato</h1>
                    </div>
                    <div className="row center-xs">
                        <h1>Los excel a procesar deben tener el siguiente formato:</h1>
                    </div>
                    <br />
                    <div className="row center-xs">
                        <img src="https://image.ibb.co/hENGwd/Formato_Correcto.png" alt="Formato 1 en espera..." />
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