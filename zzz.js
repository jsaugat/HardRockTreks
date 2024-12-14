function factorial(number) {
  if (number < 0) {
    return "Factorial is not defined for negative numbers!"
  } else if (number == 0 || number == 1) {
    return 1
  } else {
    let result = 1
    for (let i = result; i <= number; i++) {
      result *= i
    }
    return result
  }
}
console.log(factorial(32))