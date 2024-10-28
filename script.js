let id = document.getElementById('id')
let zone = document.getElementById('zone')
let hn = document.getElementById('name')
let gn = document.getElementById('game')

function gameName() {
  if (gn.value !== 'ml') {
    zone.readOnly = true
  } else {
    zone.readOnly = false
  }
}
async function check() {
  hn.innerHTML = 'Getting information...'
  try {
    const request = await fetch(`https://api.isan.eu.org/nickname/${gn.value}?id=${encodeURIComponent(id.value)}&server=${encodeURIComponent(zone.value)}`)
    const result = await request.json()
    if (request.status == 200) {
      hn.innerHTML = result.name
    } else {
      hn.innerHTML = 'Nickname not found'
    }
  } catch (error) {
    hn.innerHTML = 'An error occurred: ' + error.message;
  }
}