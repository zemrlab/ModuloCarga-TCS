import React from 'react';
import Modal from 'react-modal';
import { PageHeader } from 'react-bootstrap';

const HelpModal = (props) => (
    <Modal
        isOpen =  {props.help}
        onRequestClose={props.handClearSelectedOption}
        //contentLabel="Selected Option"
        //closeTimeoutMS={200}
        //className="modal"
    >
        <div>
        <PageHeader style={{color: "white"}}>Formatos</PageHeader>
        </div>
        <hr />
        <div className="row center-xs">
        <h4>Formato 1</h4>
        </div>
        <div className="row center-xs">
        <img src="https://image.ibb.co/gVy0Xd/formato1.png"/>
        </div>
        <hr />
        <div className="row center-xs">
        <h4>Formato 2</h4>
        </div>
        <div className="row center-xs">
        <img src="https://image.ibb.co/gyLsdJ/formato2.png"/>
        </div>
        <hr />
        <div className="row center-xs">
        <button className="myButton" onClick={props.handClearSelectedOption} >Close</button>
        </div>
    </Modal>
);

export default HelpModal;