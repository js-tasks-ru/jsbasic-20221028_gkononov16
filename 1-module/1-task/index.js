function factorial(n) {
  //без использования рекурсии
  /*let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;*/
  return n ? n * factorial(n - 1) : 1;
}

