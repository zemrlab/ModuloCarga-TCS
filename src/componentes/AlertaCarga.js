import React from 'react';
import '../style/style.css';

class AlertaCarga extends React.Component {

    closeAlerta = () => {
        document.getElementById("alerta").parentElement.style.display = "none";
    }

    render() {
        if (this.props.no_procesados > 0) {
            return (
                <div>
                    <div id="alerta" className="alert fondo-rojo" align="center">
                        <span className="closebtn" onClick={() => this.closeAlerta()}>&times;</span>
                        <strong>¡Atención!</strong> {this.props.no_procesados} archivo(s) no ha(n) sido procesado(s). Por favor revíselo en la pestaña Fallidos.
                    </div>
                    <br /><br />
                </div>
            )
        }
        else {
            return (
                <div>
                </div>
            )
        }
    }
}

export default AlertaCarga;