/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react'
import ResultadoRow from './Resultado-row'

class ResultadoList extends React.Component {

  render() {
    let numbers = 0;
    return (
      <tbody>
        {
          this.props.listado.map((content) => {
            numbers = numbers + 1;
            return <ResultadoRow
              openModalDuplicados={this.props.openModalDuplicados}
              openModalInsertados={this.props.openModalInsertados}
              number={numbers}
              tipo={this.props.tipo}
              subtipo={this.props.subtipo}
              key={content.filename}
              content={content} />
          })
        }
      </tbody>
    )
  }
}

export default ResultadoList