import React from 'react';
import TableHeader from './Table-Header';
import PagoList from './Pago-list';
import '../style/style.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', excelUrl: '', pagos: [] };
    }

    // componentDidMount() {
    //     //const url = 'https://pokeapi.co/api/v2/pokemon/1';
    //     const url2 = 'https://modulo-alumno-zuul.herokuapp.com/modulo-alumno-client/pago/listar/Juan/Eneque/Pisfil';
    //     fetch(url2)
    //         .then(respuesta => respuesta.json())
    //         .then(pagos => this.setState({ pagos: pagos }))
    //         .catch(error => console.error(error));
    // }

    _handleSubmit(e) {
        e.preventDefault();
        var data = new FormData();
        data.append('file', this.state.file);
        data.append('remark', "pruebas")
        console.log(this.state.file);

        let header = new Headers({
            'Content-Type': 'mapplication/x-www-form-urlencoded'
        });
        let sentData = {
            method: 'POST',
            mode: 'no-cors',
            header: header,
            body: data
        };
        fetch('http://18.216.135.31:8080/file/upload/', sentData)
            .then((response) => { 
                console.log(response);
                <div>
                    <p>Archivo subido correctamente</p>
                </div>
            })
            .catch(error => {
                // si hay algún error lo mostramos en consola
                console.error(error)
            });
    }

    _handleFileChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                excelUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }
    render() {

        return (
            <div>
                <h2>Carga de Datos</h2>
                <hr/>
                <div>
                    <form className="addExcel" onSubmit={(e) => this._handleSubmit(e)}>
                        <input className="fileInput"
                            type="file"
                            onChange={(e) => this._handleFileChange(e)} />
                        <button className="submitButton"
                            type="submit"
                            onClick={(e) => this._handleSubmit(e)}>Cargar Excel</button>
                    </form>
                </div>
                {/* <div>
                    <table className="table">
                        <TableHeader />
                        <PagoList listado={this.state.pagos} />
                    </table>
                </div> */}
            </div>
        )
    }
}

export default App;