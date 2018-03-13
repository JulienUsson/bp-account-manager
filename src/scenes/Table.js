import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
} from 'material-ui'

const styles = theme => ({
  price: {
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  bad: {
    color: '#F44336',
  },
  veryBad: {
    color: '#B71C1C',
  },
  good: {
    color: '#FF5722',
  },
})

class TableComponent extends React.Component {
  getClassName = price => {
    const { classes } = this.props
    let color
    if (price >= 0) {
      color = classes.good
    } else if (price <= -100) {
      color = classes.veryBad
    } else {
      color = classes.bad
    }
    return classnames(color, classes.price)
  }

  render() {
    const { data } = this.props

    return (
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
              <TableCell>
                {obj['Date opération'].format('DD/MM/YYYY')}
              </TableCell>
              <TableCell>{obj['Libellé']}</TableCell>
              <TableCell className={this.getClassName(obj['Montant'])} numeric>
                {obj['Montant']}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}

TableComponent.propTypes = {
  data: propTypes.array.isRequired,
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(TableComponent)
