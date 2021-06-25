
export default class GalacticAgeCalculator {
  constructor () {
    this.ages = {
      mercury: 0,
      venus: 0,
      earth: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      uranus: 0,
      neptune: 0,
      pluto: 0,
    }
  }

  setAge (age, planet) {
    if (planet === 'earth') {
      this.ages.mercury = age / (87.97 / 365.26)
      this.ages.venus = age / (224.70 / 365.26)
      this.ages.earth = age
      this.ages.mars = age * (1 / 1.8808476)
      this.ages.jupiter = age * (1 / 11.862615)
      this.ages.saturn = age * (1 / 29.447498)
      this.ages.uranus = age * (1 / 84.016846)
      this.ages.neptune = age * (1 / 164.79132)
      this.ages.pluto = age * (1 / 247.92065)
    }

    for (const key in this.ages) {
      const val = this.ages[key]
      const rounded = Math.round(val * 100) / 100
      this.ages[key] = rounded
    }

    console.log(this.ages)
  }
}
