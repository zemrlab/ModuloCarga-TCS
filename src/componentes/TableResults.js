import React from 'react';
import TableHeader from './Table-Header';
import PagoList from './Pago-list';

class TableResults extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //     //const url = 'https://pokeapi.co/api/v2/pokemon/1';
        //     const url2 = 'https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/Juan/Eneque/Pisfil';
        //     fetch(url2)
        //         .then(respuesta => respuesta.json())
        //         .then(pagos => this.setState({ pagos: pagos }))
        //         .catch(error => console.error(error));
    }

    render(){
        return(
            <div>
                <p></p>Prueba
            </div>
        )
    }
}

export default TableResults;