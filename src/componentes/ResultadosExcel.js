/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react';
import AlertaStatusExcel from './AlertaStatusExcel';

class ResultadosExcel extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-12 col-md-4">
                        <form>
                            <label className="label-carga">
                                Total registros procesados:
                                        </label>
                            <label className="label-number">
                                {this.props.total_registros_procesados}
                            </label>
                        </form>
                        <form>
                            <label className="label-carga">
                                - Total registros insertados: {this.props.total_registros_insertados}
                            </label>
                        </form>
                        <form>
                            <label className="label-carga">
                                - Total registros duplicados NO insertados: {this.props.total_registros_excluidos}
                            </label>
                        </form>
                        <hr />
                        <p className="label-carga">Archivo: {this.props.archivo}</p>
                        <AlertaStatusExcel 
                            status={this.props.status}
                        />
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <br /><br />
                        <div align="center">
                            <button className="myButtonCenter" onClick={(e) => this.props.openModalInsertados(this.props.lista_detalle_insertados)}>Ver Registros Insertados</button>
                        </div>
                        <br />
                        <div align="center">
                            <button className="myButtonCenter" onClick={(e) => this.props.openModalDuplicados(this.props.lista_detalle_duplicados)}>Ver Registros Duplicados</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultadosExcel;