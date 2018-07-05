import React from 'react';
import Modal from 'react-modal';

const HelpModal = (props) => (
    <Modal
        isOpen={props.help}
        onRequestClose={props.handClearSelectedOption}
    >
        <div className="row center-xs">
        <h1 className="h1" align="center">Formato</h1>
        </div>
        <div className="row center-xs">
            <h1>Los excel a procesar deben tener el siguiente formato:</h1>
        </div>
        <br/>
        <div className="row center-xs">
            <img src="https://image.ibb.co/mweDrd/formato1.png" alt="Formato 1 en espera..." />
        </div>
        <br/>
        <br/>
        <br/>
        <div className="row center-xs">
            <button className="myButtonCenter" onClick={props.handClearSelectedOption} >Close</button>
        </div>
    </Modal>
);

export default HelpModal;