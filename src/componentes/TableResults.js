import React from 'react';
import ResultadosZip from './ResultadosZip';
import ResultadosExcel from './ResultadosExcel';

class TableResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: 'good',
            subtipo: 'insert',
            listado: []
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.archivo !== this.props.archivo) {
            this.setState(() => ({
                tipo: 'good',
                subtipo: 'insert',
                listado: this.props.good_files
            }))
        }
    }

    selectGoodTable = () => {
        this.setState({
            tipo: 'good',
            subtipo: 'insert',
            listado: this.props.good_files
        })
    }
    selectBadTable = () => {
        this.setState({
            tipo: 'bad',
            listado: this.props.bad_files
        })
    }
    selectDuplexTable = () => {
        this.setState({
            tipo: 'good',
            subtipo: 'duplex',
            listado: this.props.good_files
        })
    }

    render() {
        if (!this.props.archivo) {
            if (this.props.select) {
                return (
                    <div>
                        <div className="container">
                            <div className="row center-xs">
                                Cargando...
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div></div>
                )
            }
        } else {
            if (this.props.tipo === "zip") {
                return (
                    <div>
                        <ResultadosZip
                            selectGoodTable={this.selectGoodTable}
                            selectDuplexTable={this.selectDuplexTable}
                            selectBadTable={this.selectBadTable}
                            total_registros_procesados={this.props.total_registros_procesados}
                            total_registros_insertados={this.props.total_registros_insertados}
                            total_registros_excluidos={this.props.total_registros_excluidos}
                            archivo={this.props.archivo}
                            openModalDetalle={this.props.openModalDetalle}
                            tipo={this.state.tipo}
                            subtipo={this.state.subtipo}
                            listado={this.state.listado}
                        />
                    </div>
                )
            } else {
                return (
                    <div>
                        <ResultadosExcel
                            total_registros_procesados={this.props.total_registros_procesados}
                            total_registros_insertados={this.props.total_registros_insertados}
                            total_registros_excluidos={this.props.total_registros_excluidos}
                            archivo={this.props.archivo}
                            status={this.props.status}
                            lista_detalle={this.props.lista_detalle}
                            openModalDetalle={this.props.openModalDetalle}
                        />
                    </div>
                )
            }
        }
    }
}

export default TableResults;