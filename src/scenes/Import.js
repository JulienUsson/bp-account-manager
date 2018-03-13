import React from 'react'
import propTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { Typography, withStyles } from 'material-ui'
import parseCsv from 'utils/parseCsv'

const styles = theme => ({
  dropzone: {
    margin: 10,
    borderRadius: 10,
    border: '2px dashed #ffffff',
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '2em',
    fontWeight: 'bold',
  },
})

class Import extends React.Component {
  onDrop = async file => {
    const data = await parseCsv(file)
    this.props.onLoad(data)
  }

  render() {
    const { classes } = this.props
    return (
      <Dropzone className={classes.dropzone} onDrop={this.onDrop}>
        <Typography className={classes.text}>Drop CSV file here !</Typography>
      </Dropzone>
    )
  }
}

Import.propTypes = {
  classes: propTypes.object.isRequired,
  onLoad: propTypes.func,
}

Import.defaultValues = {
  onLoad: () => null,
}

export default withStyles(styles)(Import)
