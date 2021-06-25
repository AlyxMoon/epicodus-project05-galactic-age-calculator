import GalacticAgeCalculator from '@/lib/GalaticAgeCalculator'

describe('Class GalaticAgeCalculator', () => {
  it('should start with default properties set', () => {
    const calculator = new GalacticAgeCalculator()

    expect(calculator.ages).toEqual({
      mercury: 0,
      venus: 0,
      earth: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      uranus: 0,
      neptune: 0,
      pluto: 0,
    })

    expect(calculator.agesLeft).toEqual({
      mercury: 0,
      venus: 0,
      earth: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0,
      uranus: 0,
      neptune: 0,
      pluto: 0,
    })

    expect(calculator.lifeExpectancy).toEqual(60)
  })

  it('should allow default life expectancy to be overridden on start', () => {
    const calculator = new GalacticAgeCalculator({
      lifeExpectancy: 70,
    })

    expect(calculator.lifeExpectancy).toEqual(70)
  })

  describe('setAge()', () => {
    let calculator

    beforeEach(() => {
      calculator = new GalacticAgeCalculator()
    })

    it('should set all ages correctly when setting earth age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'earth')

      expect(calculator.ages.mercury).toBeCloseTo(415.21)
      expect(calculator.ages.venus).toBeCloseTo(162.55)
      expect(calculator.ages.earth).toBeCloseTo(100.00)
      expect(calculator.ages.mars).toBeCloseTo(53.17)
      expect(calculator.ages.jupiter).toBeCloseTo(8.43)
      expect(calculator.ages.saturn).toBeCloseTo(3.40)
      expect(calculator.ages.uranus).toBeCloseTo(1.19)
      expect(calculator.ages.neptune).toBeCloseTo(0.61)
      expect(calculator.ages.pluto).toBeCloseTo(0.40)
    })

    it('should set all ages correctly when setting mercury age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'mercury')

      expect(calculator.ages.mercury).toBeCloseTo(100.00)
      expect(calculator.ages.venus).toBeCloseTo(39.15)
      expect(calculator.ages.earth).toBeCloseTo(24.08)
      expect(calculator.ages.mars).toBeCloseTo(12.80)
      expect(calculator.ages.jupiter).toBeCloseTo(2.03)
      expect(calculator.ages.saturn).toBeCloseTo(0.82)
      expect(calculator.ages.uranus).toBeCloseTo(0.29)
      expect(calculator.ages.neptune).toBeCloseTo(0.15)
      expect(calculator.ages.pluto).toBeCloseTo(0.10)
    })

    it('should set all ages correctly when setting venus age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'venus')

      expect(calculator.ages.mercury).toBeCloseTo(255.43)
      expect(calculator.ages.venus).toBeCloseTo(100)
      expect(calculator.ages.earth).toBeCloseTo(61.52)
      expect(calculator.ages.mars).toBeCloseTo(32.71)
      expect(calculator.ages.jupiter).toBeCloseTo(5.19)
      expect(calculator.ages.saturn).toBeCloseTo(2.09)
      expect(calculator.ages.uranus).toBeCloseTo(0.73)
      expect(calculator.ages.neptune).toBeCloseTo(0.37)
      expect(calculator.ages.pluto).toBeCloseTo(0.25)
    })

    it('should set all ages correctly when setting mars age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'mars')

      expect(calculator.ages.mercury).toBeCloseTo(780.95)
      expect(calculator.ages.venus).toBeCloseTo(305.74)
      expect(calculator.ages.earth).toBeCloseTo(188.08)
      expect(calculator.ages.mars).toBeCloseTo(100)
      expect(calculator.ages.jupiter).toBeCloseTo(15.86)
      expect(calculator.ages.saturn).toBeCloseTo(6.39)
      expect(calculator.ages.uranus).toBeCloseTo(2.24)
      expect(calculator.ages.neptune).toBeCloseTo(1.14)
      expect(calculator.ages.pluto).toBeCloseTo(0.76)
    })

    it('should set all ages correctly when setting jupiter age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'jupiter')

      expect(calculator.ages.mercury).toBeCloseTo(4925.47)
      expect(calculator.ages.venus).toBeCloseTo(1928.32)
      expect(calculator.ages.earth).toBeCloseTo(1186.26)
      expect(calculator.ages.mars).toBeCloseTo(630.71)
      expect(calculator.ages.jupiter).toBeCloseTo(100)
      expect(calculator.ages.saturn).toBeCloseTo(40.28)
      expect(calculator.ages.uranus).toBeCloseTo(14.12)
      expect(calculator.ages.neptune).toBeCloseTo(7.20)
      expect(calculator.ages.pluto).toBeCloseTo(4.78)
    })

    it('should set all ages correctly when setting saturn age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'saturn')

      expect(calculator.ages.mercury).toBeCloseTo(12226.89)
      expect(calculator.ages.venus).toBeCloseTo(4786.82)
      expect(calculator.ages.earth).toBeCloseTo(2944.75)
      expect(calculator.ages.mars).toBeCloseTo(1565.65)
      expect(calculator.ages.jupiter).toBeCloseTo(248.24)
      expect(calculator.ages.saturn).toBeCloseTo(100)
      expect(calculator.ages.uranus).toBeCloseTo(35.05)
      expect(calculator.ages.neptune).toBeCloseTo(17.87)
      expect(calculator.ages.pluto).toBeCloseTo(11.88)
    })

    it('should set all ages correctly when setting uranus age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'uranus')

      expect(calculator.ages.mercury).toBeCloseTo(34884.61)
      expect(calculator.ages.venus).toBeCloseTo(13657.32)
      expect(calculator.ages.earth).toBeCloseTo(8401.68)
      expect(calculator.ages.mars).toBeCloseTo(4466.97)
      expect(calculator.ages.jupiter).toBeCloseTo(708.25)
      expect(calculator.ages.saturn).toBeCloseTo(285.31)
      expect(calculator.ages.uranus).toBeCloseTo(100)
      expect(calculator.ages.neptune).toBeCloseTo(50.98)
      expect(calculator.ages.pluto).toBeCloseTo(33.89)
    })

    it('should set all ages correctly when setting neptune age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'neptune')

      expect(calculator.ages.mercury).toBeCloseTo(68422.96)
      expect(calculator.ages.venus).toBeCloseTo(26787.57)
      expect(calculator.ages.earth).toBeCloseTo(16479.13)
      expect(calculator.ages.mars).toBeCloseTo(8761.55)
      expect(calculator.ages.jupiter).toBeCloseTo(1389.17)
      expect(calculator.ages.saturn).toBeCloseTo(559.61)
      expect(calculator.ages.uranus).toBeCloseTo(196.14)
      expect(calculator.ages.neptune).toBeCloseTo(100)
      expect(calculator.ages.pluto).toBeCloseTo(66.47)
    })

    it('should set all ages correctly when setting pluto age (rounded 2 decimal places with some allowed variance)', () => {
      calculator.setAge(100, 'pluto')

      expect(calculator.ages.mercury).toBeCloseTo(102939.07)
      expect(calculator.ages.venus).toBeCloseTo(40300.62)
      expect(calculator.ages.earth).toBeCloseTo(24792.07)
      expect(calculator.ages.mars).toBeCloseTo(13181.33)
      expect(calculator.ages.jupiter).toBeCloseTo(2089.93)
      expect(calculator.ages.saturn).toBeCloseTo(841.91)
      expect(calculator.ages.uranus).toBeCloseTo(295.08)
      expect(calculator.ages.neptune).toBeCloseTo(150.45)
      expect(calculator.ages.pluto).toBeCloseTo(100)
    })
  })

  describe('calculateAgesLeft()', () => {
    it('should update agesLeft prop based on planet ages with positive years left', () => {
      const calculator = new GalacticAgeCalculator({
        lifeExpectancy: 50,
      })

      calculator.setAge(100)
      calculator.calculateAgesLeft()

      expect(calculator.agesLeft.mercury).toBeCloseTo(207.60)
      expect(calculator.agesLeft.venus).toBeCloseTo(81.28)
      expect(calculator.agesLeft.earth).toBeCloseTo(50)
      expect(calculator.agesLeft.mars).toBeCloseTo(26.58)
      expect(calculator.agesLeft.jupiter).toBeCloseTo(4.21)
      expect(calculator.agesLeft.saturn).toBeCloseTo(1.70)
      expect(calculator.agesLeft.uranus).toBeCloseTo(0.60)
      expect(calculator.agesLeft.neptune).toBeCloseTo(0.30)
      expect(calculator.agesLeft.pluto).toBeCloseTo(0.20)
    })
  })
})
