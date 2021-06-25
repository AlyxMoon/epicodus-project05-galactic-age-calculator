import roundToDecimal from '@/lib/roundToDecimal'

describe('roundToDecimal()', () => {
  it('should correctly round to the 0th decimal (default option)', () => {
    expect(roundToDecimal(45.3)).toEqual(45)
    expect(roundToDecimal(45.5)).toEqual(46)
  })

  it('should correctly round to the 1st decimal', () => {
    expect(roundToDecimal(32.31, 1)).toEqual(32.3)
    expect(roundToDecimal(76.56, 1)).toEqual(76.6)
  })

  it('should correctly round to the 2nd decimal', () => {
    expect(roundToDecimal(123.322, 2)).toEqual(123.32)
    expect(roundToDecimal(6.589, 2)).toEqual(6.59)
  })

  it('rounds digits and correctly rolls over remainder', () => {
    expect(roundToDecimal(123.789, 2)).toEqual(123.79)
    expect(roundToDecimal(123.799, 2)).toEqual(123.8)
  })
})
