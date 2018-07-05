import React from 'react';

class CapturaDatos extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <input
                                type="file"
                                id="filereader"
                                className="fileInput"
                                pattern=".*[^ ].*"
                                required
                                accept=".xls, .zip"
                                onChange={(e) => this.props.handleFileChange(e)}
                            />
                        </div>
                        <div className="col-xs-4 col-md-2">
                            <input className="labelinput"
                                value={this.props.value}
                                disabled
                                required
                            />
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <select
                                className="input"
                                placeholder="Seleccione formato"
                                required
                                value={this.props.formato}
                                onChange={(e) => this.props.changeFormato(e.target.value)}
                            >
                                <option value="" disabled>Tipo de Moneda</option>
                                <option value="1">1. Soles</option>
                                <option value="2">2. Dólares</option>
                            </select>
                        </div>
                        <div className="col-xs-2 col-md-1">
                            <input className="myButton" type="button"
                                onClick={this.props.ayudaModal}
                                value="?" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-0 col-md-9">
                        </div>
                        <div className="col-xs-12 col-md-3">
                            <input
                                className="myButton"
                                type="submit"
                                value="CARGAR"
                                onClick={(e) => {
                                    if (this.props.excelUrl.trim() === '' || this.props.value === '' || this.props.formato === '') {
                                        console.log('Complete los campos.');
                                    } else {
                                        this.props.handleSubmit(e);
                                    }
                                }}
                            />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default CapturaDatos;