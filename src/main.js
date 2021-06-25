// import GalacticAgeCalculator from './lib/GalaticAgeCalculator'
import 'purecss/build/base-min.css'
import '@/styles/main.scss'

const planetRadios = document.querySelectorAll('input[name="planet"]')

for (const radio of planetRadios) {
  radio.addEventListener('change', (event) => {
    console.log('updated selected planet')
  })
}
