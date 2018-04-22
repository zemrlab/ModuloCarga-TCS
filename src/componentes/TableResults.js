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
            return (
                <div>
                    <p>Cargando...</p>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="addExcel" >
                        <p>Total inserciones: {this.props.total_inserciones}</p>
                        <p>Archivo: {this.props.archivo}</p>
                        <button
                            onClick={() => this.selectGoodTable()}
                        >Correctos</button>
                        <button
                            onClick={() => this.selectBadTable()}
                        >Fallidos</button>
                        <TableHeader />
                        <ResultadoList
                            tipo={this.state.tipo}
                            listado={this.state.listado}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default TableResults;