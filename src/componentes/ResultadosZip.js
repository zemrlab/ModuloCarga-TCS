import React from 'react';
import TableHeader from './Table-Header';
import ResultadoList from './Resultado-list';

class ResultadosZip extends React.Component {

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
                    </div>
                    <div className="col-xs-12 col-md-8">
                        <br />
                        <div className="row center-xs">
                            <button
                                className="myButtonLeft"
                                onClick={() => this.props.selectGoodTable()}
                            >Insertados</button>
                            <button
                                className="myButtonCenter"
                                onClick={() => this.props.selectDuplexTable()}
                            >Duplicados</button>
                            <button
                                className="myButtonRight"
                                onClick={() => this.props.selectBadTable()}
                            >Fallidos</button>
                        </div>
                        <br /><br />
                        <table className="table">
                            <TableHeader />
                            <ResultadoList
                                openModalDuplicados={this.props.openModalDuplicados}
                                openModalInsertados={this.props.openModalInsertados}
                                tipo={this.props.tipo}
                                subtipo={this.props.subtipo}
                                listado={this.props.listado}
                            />
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default ResultadosZip;