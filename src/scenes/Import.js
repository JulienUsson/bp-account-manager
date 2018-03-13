import React from 'react'
import propTypes from 'prop-types'
import Dropzone from 'react-dropzone'
import { Typography } from 'material-ui'
import parseCsv from 'utils/parseCsv'

class Import extends React.Component {
  onDrop = async file => {
    const data = await parseCsv(file)
    this.props.onLoad(data)
  }

  render() {
    return (
      <Dropzone onDrop={this.onDrop}>
        <Typography>DROP CSV FILE HERE !</Typography>
      </Dropzone>
    )
  }
}

Import.propTypes = {
  onLoad: propTypes.func,
}

Import.defaultValues = {
  onLoad: () => null,
}

export default Import
