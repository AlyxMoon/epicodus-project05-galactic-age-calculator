import GalacticAgeCalculator from '@/lib/GalaticAgeCalculator'

describe('Class GalaticAgeCalculator', () => {
  it('should not blow up when creating it', () => {
    const calculator = new GalacticAgeCalculator()
    expect(calculator).toBeTruthy()
  })
})
