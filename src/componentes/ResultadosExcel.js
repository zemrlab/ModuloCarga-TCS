import React from 'react';

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
                                - Total registros duplicados: {this.props.total_registros_excluidos}
                            </label>
                        </form>
                        <hr />
                        <p className="label-carga">Archivo: {this.props.archivo}</p>
                        <p className="label-carga">Estado: {this.props.status}</p>
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <br /><br />
                        <div align="center">
                            <button className="myButtonCenter" onClick={(e) => this.props.openModalDetalle(this.props.lista_detalle)}>Ver Registros Duplicados</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultadosExcel;