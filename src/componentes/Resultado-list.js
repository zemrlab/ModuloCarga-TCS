import React from 'react'
import ResultadoRow from './Resultado-row'

class ResultadoList extends React.Component {

  render() {
    return (
        <tbody>
          {
            this.props.listado.map((content) => {
              return <ResultadoRow key={content.file} 
                                  content={content} />
            })
          }
        </tbody>
    )
  }
}

export default ResultadoList