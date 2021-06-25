import roundToDecimal from '@/lib/roundToDecimal'

describe('roundToDecimal()', () => {
  it('should correctly round to the 0th decimal (default option)', () => {
    expect(roundToDecimal(45.3)).toEqual(45)
  })
})
