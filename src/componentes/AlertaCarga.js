import React from 'react';
import '../style/style.css';

class AlertaCarga extends React.Component {

    closeAlerta = () => {
        document.getElementById("alerta").parentElement.style.display="none";
    }

    render() {
        return (
            <div>
                <div id="alerta" className="alert" align="center">
                    <span className="closebtn" onClick={()=>this.closeAlerta()}>&times;</span>
                    <strong>¡Atención!</strong> {this.props.no_procesados} archivo(s) no ha(n) sido procesado(s). Por favor revíselo en la pestaña Fallidos.
                </div>
                <br/><br/>
            </div>
        )
    }
}

export default AlertaCarga;