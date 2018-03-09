import React from 'react'
import Dropzone from 'react-dropzone'
import { Typography } from 'material-ui'
import parseCsv from 'utils/parseCsv'

async function onDrop(file) {
  await parseCsv(file)
}

export default () => (
  <Dropzone onDrop={onDrop}>
    <Typography>DROP CSV FILE HERE !</Typography>
  </Dropzone>
)
