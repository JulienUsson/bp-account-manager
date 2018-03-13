import React from 'react'
import propTypes from 'prop-types'
import { Table, TableBody, TableCell, TableHead, TableRow } from 'material-ui'

const TableComponent = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Date</TableCell>
        <TableCell>Libellé</TableCell>
        <TableCell numeric>Montant</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map(obj => (
        <TableRow key={obj['Date opération'] + obj['Référence']}>
          <TableCell>{obj['Date opération'].format('DD/MM/YYYY')}</TableCell>
          <TableCell>{obj['Libellé']}</TableCell>
          <TableCell numeric>{obj['Montant']}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

TableComponent.propTypes = {
  data: propTypes.array.isRequired,
}

export default TableComponent
