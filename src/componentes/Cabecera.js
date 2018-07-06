/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react';

class Cabecera extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-10">
                        <h1 className="h1 white">Módulo Carga de Datos</h1>
                    </div>
                    <div className="col-xs-2">
                        <a href="http://siga-fisi.herokuapp.com/dashboard">
                            <img className="img"
                                src="http://www.clker.com/cliparts/R/L/N/Y/N/e/house-logo-hi.png"
                                alt="HOME"
                                height="60" width="60"
                                align="right"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cabecera;