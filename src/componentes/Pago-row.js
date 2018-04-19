import React from 'react'

class PagoRow extends React.Component {

  render() {
    return(
    <tr>
			<td className="td">{this.props.content.file}</td>
			<td className="td">{this.props.content.ok}</td>
      <td className="td">{this.props.content.erroneos}</td>
	  </tr>
    )
  }
}

export default PagoRow;