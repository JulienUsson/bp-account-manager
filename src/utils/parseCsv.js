import iconv from 'iconv-lite'
import moment from 'moment'
import orderBy from 'lodash/orderBy'
const electron = window.require('electron')
const fs = electron.remote.require('fs')

export default file => {
  return new Promise(function(resolve, reject) {
    fs.readFile(file[0].path, function(err, data) {
      if (err) {
        reject('Impossible de lire le fichier')
      }

      const [header, ...lines] = iconv
        .decode(data, 'win1252')
        .split('\r\n')
        .map(line => line.split(';'))
      lines.pop()

      const result = lines
        .map(values => {
          const obj = {}
          header.forEach((key, i) => {
            obj[key] = values[i]
          })
          return obj
        })
        .map(({ Montant, Libellé, ...other }) => ({
          ...other,
          Libellé: Libellé.replace(/\d{6} .{2}\*{4}\d{4} /, ''),
          'Date opération': moment(other['Date opération'], 'DD/MM/YYYY'),
          Montant: Number(Montant.replace(',', '.')),
        }))

      const orderedResult = orderBy(result, ['Date opération'])

      resolve(orderedResult)
    })
  })
}
