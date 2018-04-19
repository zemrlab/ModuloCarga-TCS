import React from 'react';
import TableHeader from './Table-Header';
import ResultadoList from './Resultado-list';
import { NavLink } from 'react-router-dom';

class TableResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultado: []
        }
    }

    componentDidMount() {
        const url = 'http://localhost:3000/content';
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado=> this.setState({ resultado: resultado}))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <TableHeader />
                <ResultadoList listado= {this.state.resultado}/>
                <div>
                    <br />
                    <NavLink to="/" activeClassName="is-active" exact={true}>Retornar</NavLink>
                </div>
            </div>
        )
    }
}

export default TableResults;