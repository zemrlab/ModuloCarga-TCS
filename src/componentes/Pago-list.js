import React from 'react'
import PagoRow from './Pago-row'

class PagoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((content) => {
              return <PagoRow key={content.file.toString()} 
                                  content={content} />
            })
          }
        </tbody>
    )
  }
}

export default PagoList