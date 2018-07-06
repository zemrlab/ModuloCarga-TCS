/*
Autor: Ccopa Mamani, Andrés
correo: andres.ccopa@unmsm.edu.pe
Team AlphaZero
Fecha: julio 2018
*/

import React from 'react'

class TableHeader extends React.Component {

  render() {
    return (
      <thead>
        <tr>
          <th className="th">#</th>
          <th className="th">NOMBRE</th>
          <th className="th">DETALLE</th>
        </tr>
      </thead>
    )
  }
}

export default TableHeader