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
})
