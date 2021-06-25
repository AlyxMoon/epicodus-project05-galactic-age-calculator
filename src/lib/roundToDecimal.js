
const roundToDecimal = (num, digits = 0) => {
  const offset = 10 ** digits
  return Math.round(num * offset) / offset
}

export default roundToDecimal
