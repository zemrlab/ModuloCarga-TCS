import React from 'react'

class TableHeader extends React.Component {

  render() {
    return (
      <thead>
        <tr>
          <th >#</th>
          <th >NOMBRE</th>
          <th >DETALLE</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader