import React from 'react';
import TableHeader from './Table-Header';
import ResultadoList from './Resultado-list';

class TableResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipo: 'good',
            listado: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.archivo !== this.props.archivo) {
            this.setState((prevState) => ({
                listado: this.props.good_files
            }))
        }
    }

    selectGoodTable() {
        this.setState({
            tipo: 'good',
            listado: this.props.good_files
        })
    }
    selectBadTable() {
        this.setState({
            tipo: 'bad',
            listado: this.props.bad_files
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
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-md-4">
                                    <form>
                                        <label className="label-carga">
                                            Total inserciones:
                                    </label>
                                        <label className="label-number">
                                            {this.props.total_inserciones}
                                        </label>
                                    </form>
                                    <hr />
                                    <p className="label-carga">Archivo: {this.props.archivo}</p>
                                </div>
                                <div className="col-xs-12 col-md-8">
                                    <br />
                                    <div className="row center-xs">
                                        <button
                                            className="myButton2"
                                            onClick={() => this.selectGoodTable()}
                                        >Correctos</button>
                                        <button
                                            className="myButton3"
                                            onClick={() => this.selectBadTable()}
                                        >Fallidos</button>
                                    </div>
                                    <br /><br />
                                    <table className="table">
                                        <TableHeader />
                                        <ResultadoList
                                            tipo={this.state.tipo}
                                            listado={this.state.listado}
                                        />
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            } else {
                return (
                    <div>
                        <form>
                            <label className="label-carga">
                                Total inserciones:
                                    </label>
                            <label className="label-number">
                                {this.props.total_inserciones}
                            </label>
                        </form>
                        <hr />
                        <p className="label-carga">Archivo: {this.props.archivo}</p>
                        <p className="label-carga">Estado: {this.props.status}</p>
                    </div>
                )
            }
        }
    }
}

export default TableResults;