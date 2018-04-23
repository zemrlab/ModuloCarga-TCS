import React from 'react'

class ResultadoRow extends React.Component {

  render() {
    if(this.props.tipo === 'good'){
      return(
        <tr>
          <td className="td">{this.props.number}</td>
          <td className="td">{this.props.content.file}</td>
          <td className="td">{this.props.content.nro_registros}</td>
        </tr>
        )
    }else {
      return(
        <tr>
          <td className="td">{this.props.number}</td>
          <td className="td">{this.props.content.file}</td>
          <td className="td">{this.props.content.problema}</td>
        </tr>
        )
    }
  }
}

export default ResultadoRow;