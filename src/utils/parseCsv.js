import iconv from 'iconv-lite'
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
        .map(({ Montant, ...other }) => ({
          ...other,
          Montant: Number(Montant.replace(',', '.')),
        }))

      resolve(result)
    })
  })
}
