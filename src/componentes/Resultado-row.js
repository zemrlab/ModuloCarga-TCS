import React from 'react'

class ResultadoRow extends React.Component {

  render() {
    return(
    <tr>
			<td className="td">{this.props.content.file}</td>
			<td className="td">{this.props.content.ok}</td>
      <td className="td">{this.props.content.errores}</td>
	  </tr>
    )
  }
}

export default ResultadoRow;