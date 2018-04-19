import React from 'react'

class TableHeader extends React.Component {

  render() {
    return (
      <thead>
        <tr>
          <th className="th">ARCHIVO</th>
          <th className="th">CARGA CORRECTA</th>
          <th className="th">CARGA ERRONEA</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader