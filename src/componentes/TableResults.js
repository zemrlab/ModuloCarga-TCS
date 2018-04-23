import React from 'react';
import TableHeader from './Table-Header';
import ResultadoList from './Resultado-list';
import { Table , ButtonGroup , Button } from 'react-bootstrap';

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
            return (
                <div>
                    <p>Cargando...</p>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="addExcel" >
                        <p className="label-carga">Total inserciones: {this.props.total_inserciones}</p>
                        <p className="label-carga">Archivo: {this.props.archivo}</p>
                        <button
                            className="myButton2"
                            onClick={() => this.selectGoodTable()}
                        >Correctos</button>
                        <button
                            className="myButton3"
                            onClick={() => this.selectBadTable()}
                        >Fallidos</button>
                        <table className="darkTable">
                            <TableHeader />
                            <ResultadoList
                                tipo={this.state.tipo}
                                listado={this.state.listado}
                            />
                        </table>
                    </div>
                </div>
            )
        }
    }
}

export default TableResults;