import GalacticAgeCalculator from './lib/GalaticAgeCalculator'
import 'purecss/build/pure-min.css'
import '@/styles/main.scss'

const showCalculatorOutput = (calculator) => {
  const outputAge = document.querySelector('#output-age')
  const outputExpectancy = document.querySelector('#output-expectancy')

  const activePlanet = document.querySelector('input[name="planet"]:checked')
  if (!activePlanet) return

  outputAge.innerText = calculator.ages[activePlanet.value]
  outputExpectancy.innerText = calculator.agesLeft[activePlanet.value]
}

const addSidebarEventListeners = () => {
  document
    .querySelector('.sidebar button[data-action="collapse-sidebar"]')
    .addEventListener('click', () => {
      document.querySelector('.sidebar').classList.add('collapsed')

      const radio = document.querySelector('input[name="planet"]:checked')
      if (radio) radio.checked = false
    })

  document
    .querySelector('.sidebar button[data-action="expand-sidebar"]')
    .addEventListener('click', () => {
      document.querySelector('.sidebar').classList.remove('collapsed')
    })
}

const addPlanetEventListeners = (calculator) => {
  const planetRadios = document.querySelectorAll('input[name="planet"]')
  const planetLabel = document.querySelector('#active-planet-label')

  for (const radio of planetRadios) {
    radio.addEventListener('change', (event) => {
      document.querySelector('.sidebar').classList.remove('collapsed')

      planetLabel.innerText = event.target.value
      showCalculatorOutput(calculator)
    })
  }
}

const addAgeInputListeners = (calculator) => {
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
  })

  const inputAge = document.querySelector('#input-age')
  const inputExpectancy = document.querySelector('#input-expectancy')

  inputAge.value = calculator.ages.earth
  inputExpectancy.value = calculator.lifeExpectancy

  inputAge.addEventListener('change', (event) => {
    const num = parseInt(event.target.value)

    if (Number.isNaN(num)) {
      event.target.value = 0
    } else {
      calculator.setAge(num)
      calculator.calculateAgesLeft()
      showCalculatorOutput(calculator)
    }
  })

  inputExpectancy.addEventListener('change', (event) => {
    const num = parseInt(event.target.value)

    if (Number.isNaN(num)) {
      event.target.value = 0
    } else {
      calculator.lifeExpectancy = num
      calculator.calculateAgesLeft()
      showCalculatorOutput(calculator)
    }
  })
}

const main = () => {
  const calculator = new GalacticAgeCalculator()
  calculator.setAge(1)
  calculator.calculateAgesLeft()

  addSidebarEventListeners()
  addPlanetEventListeners(calculator)
  addAgeInputListeners(calculator)
  showCalculatorOutput(calculator)
}

main()
