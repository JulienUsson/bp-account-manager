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
  Checkbox,
  Button,
} from 'material-ui'
import ExportIcon from 'material-ui-icons/ContentCopy'

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
  container: {
    paddingBottom: 75,
  },
  button: {
    position: 'fixed',
    bottom: 15,
    right: 15,
  },
})

class TableComponent extends React.Component {
  state = {
    exportedData: [],
  }

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

  handleChange = obj => event => {
    if (event.target.checked) {
      this.setState(state => ({ exportedData: [...state.exportedData, obj] }))
    } else {
      this.setState(state => ({
        exportedData: state.exportedData.filter(o => o !== obj),
      }))
    }
  }

  render() {
    const { data, classes } = this.props
    const { exportedData } = this.state

    return (
      <div className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Date</TableCell>
              <TableCell>Libellé</TableCell>
              <TableCell numeric>Montant</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(obj => (
              <TableRow key={obj['Date opération'] + obj['Référence']}>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={exportedData.includes(obj)}
                    onChange={this.handleChange(obj)}
                  />
                </TableCell>
                <TableCell>
                  {obj['Date opération'].format('DD/MM/YYYY')}
                </TableCell>
                <TableCell>{obj['Libellé']}</TableCell>
                <TableCell
                  className={this.getClassName(obj['Montant'])}
                  numeric
                >
                  {obj['Montant']}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button
          variant="fab"
          color="secondary"
          aria-label="export"
          className={classes.button}
        >
          <ExportIcon />
        </Button>
      </div>
    )
  }
}

TableComponent.propTypes = {
  data: propTypes.array.isRequired,
  classes: propTypes.object.isRequired,
}

export default withStyles(styles)(TableComponent)
