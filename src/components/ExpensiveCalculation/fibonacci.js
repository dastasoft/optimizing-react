/* eslint-disable import/prefer-default-export */
export const fibonacci = (n) =>
  n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
