const { clipboard } = window.require('electron')

export default data => {
  clipboard.writeText('poc')
}
