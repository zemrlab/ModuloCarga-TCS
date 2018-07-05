import React from 'react';
import '../style/style.css';

class AlertaStatusExcel extends React.Component {

    closeAlerta = () => {
        document.getElementById("alerta").parentElement.style.display = "none";
    }

    render() {
        if (this.props.status === 'OK') {
            return (
                <div>
                    <div id="alerta" className="alert fondo-verde">
                        <span className="closebtn" onClick={() => this.closeAlerta()}>&times;</span>
                        <strong>Estado:</strong> {this.props.status}.
                    </div>
                    <br /><br />
                </div>
            )
        }
        else {
            return (
                <div>
                    <div id="alerta" className="alert fondo-rojo">
                        <span className="closebtn" onClick={() => this.closeAlerta()}>&times;</span>
                        <strong>Estado:</strong> {this.props.status}.
                    </div>
                    <br /><br />
                </div>
            )
        }
    }
}

export default AlertaStatusExcel;