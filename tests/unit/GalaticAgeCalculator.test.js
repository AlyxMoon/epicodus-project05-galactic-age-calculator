import GalacticAgeCalculator from '@/lib/GalaticAgeCalculator'

describe('Class GalaticAgeCalculator', () => {
  it('should not blow up when creating it', () => {
    const calculator = new GalacticAgeCalculator()
    expect(calculator).toBeTruthy()
  })

  it('should start with all the ages set to 0', () => {
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
  })

  it('should set all ages correctly when setting earth age (rounded 2 digits)', () => {
    const calculator = new GalacticAgeCalculator()
    calculator.setAge(100, 'earth')

    expect(calculator.ages.mercury).toBeCloseTo(415.21)
    expect(calculator.ages.venus).toBeCloseTo(162.55)
    expect(calculator.ages.earth).toBeCloseTo(100.00)
    expect(calculator.ages.mars).toBeCloseTo(53.17)
    expect(calculator.ages.jupiter).toBeCloseTo(8.43)
    expect(calculator.ages.saturn).toBeCloseTo(3.40)
    expect(calculator.ages.uranus).toBeCloseTo(1.19)
    expect(calculator.ages.pluto).toBeCloseTo(0.60)
    expect(calculator.ages.mars).toBeCloseTo(0.40)
  })
})
