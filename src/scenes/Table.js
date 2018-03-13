import React from 'react'
import propTypes from 'prop-types'
import { Table, TableBody, TableCell, TableHead, TableRow } from 'material-ui'

const TableComponent = ({ data }) => (
  <Table>
    <TableHead>
      <TableRow>
        {Object.keys(data[0]).map(key => (
          <TableCell key={key}>{key}</TableCell>
        ))}
      </TableRow>
    </TableHead>
    <TableBody>
      {data.map(obj => (
        <TableRow key={obj}>
          {Object.values(obj).map(value => (
            <TableCell key={value}>{value}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
)

TableComponent.propTypes = {
  data: propTypes.object.isRequired,
}

export default TableComponent
