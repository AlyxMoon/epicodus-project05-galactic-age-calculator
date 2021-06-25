// import GalacticAgeCalculator from './lib/GalaticAgeCalculator'
import 'purecss/build/pure-min.css'
import '@/styles/main.scss'

const planetRadios = document.querySelectorAll('input[name="planet"]')

for (const radio of planetRadios) {
  radio.addEventListener('change', (event) => {
    console.log('updated selected planet')
  })
}

document
  .querySelector('.sidebar button[data-action="collapse-sidebar"]')
  .addEventListener('click', () => {
    document.querySelector('.sidebar').classList.add('collapsed')
  })

document
  .querySelector('.sidebar button[data-action="expand-sidebar"]')
  .addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('collapsed')
  })
