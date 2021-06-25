import roundToDecimal from '@/lib/roundToDecimal'

export default class GalacticAgeCalculator {
  constructor ({
    lifeExpectancy = 60,
  } = {}) {
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

    this.agesLeft = {
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

    this.lifeExpectancy = lifeExpectancy

    this.multOffsetFromEarth = {
      mercury: 4.152097305899739,
      venus: 1.6255451713395637,
      earth: 1,
      mars: 0.5316751872932182,
      jupiter: 0.0842984451573283,
      saturn: 0.03395874243713337,
      uranus: 0.011902374911812329,
      neptune: 0.006068280780808115,
      pluto: 0.004033548637437019,
    }
  }

  setAge (age, planet = 'earth') {
    this.ages.earth = age / this.multOffsetFromEarth[planet]
    this.ages.mercury = this.ages.earth * this.multOffsetFromEarth.mercury
    this.ages.venus = this.ages.earth * this.multOffsetFromEarth.venus
    this.ages.mars = this.ages.earth * this.multOffsetFromEarth.mars
    this.ages.jupiter = this.ages.earth * this.multOffsetFromEarth.jupiter
    this.ages.saturn = this.ages.earth * this.multOffsetFromEarth.saturn
    this.ages.uranus = this.ages.earth * this.multOffsetFromEarth.uranus
    this.ages.neptune = this.ages.earth * this.multOffsetFromEarth.neptune
    this.ages.pluto = this.ages.earth * this.multOffsetFromEarth.pluto

    for (const key in this.ages) {
      this.ages[key] = roundToDecimal(this.ages[key], 2)
    }
  }

  calculateAgesLeft () {
    this.agesLeft.earth = this.lifeExpectancy - this.ages.earth
    this.agesLeft.mercury = this.agesLeft.earth * this.multOffsetFromEarth.mercury
    this.agesLeft.venus = this.agesLeft.earth * this.multOffsetFromEarth.venus
    this.agesLeft.mars = this.agesLeft.earth * this.multOffsetFromEarth.mars
    this.agesLeft.jupiter = this.agesLeft.earth * this.multOffsetFromEarth.jupiter
    this.agesLeft.saturn = this.agesLeft.earth * this.multOffsetFromEarth.saturn
    this.agesLeft.uranus = this.agesLeft.earth * this.multOffsetFromEarth.uranus
    this.agesLeft.neptune = this.agesLeft.earth * this.multOffsetFromEarth.neptune
    this.agesLeft.pluto = this.agesLeft.earth * this.multOffsetFromEarth.pluto

    for (const key in this.agesLeft) {
      this.agesLeft[key] = roundToDecimal(this.agesLeft[key], 2)
    }
  }
}
