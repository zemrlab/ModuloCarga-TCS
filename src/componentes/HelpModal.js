import React from 'react';
import Modal from 'react-modal';

const HelpModal = (props) => (
    <Modal
        isOpen={props.help}
        onRequestClose={props.handClearSelectedOption}
    >
        <div>
        <h1 align="center">Formatos</h1>
        </div>
        <hr />
        <div className="row center-xs">
            <h4>Formato 1</h4>
        </div>
        <div className="row center-xs">
            <img src="https://image.ibb.co/gVy0Xd/formato1.png" alt="Formato 1 en espera..." />
        </div>
        <br/>
        <hr />
        <div className="row center-xs">
            <h4>Formato 2</h4>
        </div>
        <div className="row center-xs">
            <img src="https://image.ibb.co/gyLsdJ/formato2.png" alt="Formato 2 en espera..." />
        </div>
        <br/>
        <hr />
        <br/>
        <div className="row center-xs">
            <button className="myButtonCenter" onClick={props.handClearSelectedOption} >Close</button>
        </div>
    </Modal>
);

export default HelpModal;