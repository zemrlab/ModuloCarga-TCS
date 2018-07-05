import React from 'react';
import '../style/style.css';

class AlertaCarga extends React.Component {

    closeAlertaRojo = () => {
        document.getElementById("alertarojo").parentElement.style.display = "none";
    }

    closeAlertaVerde = () => {
        document.getElementById("alertaverde").parentElement.style.display = "none";
    }

    render() {
        if (this.props.no_procesados > 0 && this.props.si_procesados > 0) {
            return (
                <div>
                    <div id="alertaverde" className="alert fondo-verde" align="center">
                        <span className="closebtn" onClick={() => this.closeAlertaVerde()}>&times;</span>
                        <strong>¡Excelente!</strong> {this.props.si_procesados} archivo(s) ha(n) sido procesado(s) correctamente.
                    </div>
                    <br />
                    <div id="alertarojo" className="alert fondo-rojo" align="center">
                        <span className="closebtn" onClick={() => this.closeAlertaRojo()}>&times;</span>
                        <strong>¡Atención!</strong> {this.props.no_procesados} archivo(s) no ha(n) sido procesado(s). Por favor revíselo en la pestaña Fallidos.
                    </div>
                    <br /><br />
                </div>
            )
        }
        else if (this.props.si_procesados > 0) {
            return (
                <div>
                    <div id="alertaverde" className="alert fondo-verde" align="center">
                        <span className="closebtn" onClick={() => this.closeAlertaVerde()}>&times;</span>
                        <strong>¡Excelente!</strong> {this.props.si_procesados} archivo(s) ha(n) sido procesado(s) correctamente.
                    </div>
                    <br /><br />
                </div>
            )
        } else {
            return (
                <div>
                    <div id="alertarojo" className="alert fondo-rojo" align="center">
                        <span className="closebtn" onClick={() => this.closeAlertaRojo()}>&times;</span>
                        <strong>¡Atención!</strong> {this.props.no_procesados} archivo(s) no ha(n) sido procesado(s). Por favor revíselo en la pestaña Fallidos.
                    </div>
                    <br /><br />
                </div>
            )

        }
    }
}

export default AlertaCarga;