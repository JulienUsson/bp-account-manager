const { clipboard } = window.require('electron')

export default data => {
  clipboard.writeText(
    data
      .map(line => {
        const montant = line['Montant']
        const label = line['Libellé']
        const date = line['Date opération'].format('DD/MM/YY')
        return `${montant}\t${label}\t${date}`
      })
      .join('\r\n')
  )
}
