def factorial(number):
  print('현재 number',number)
  if number <= 1:
    return 1
  print(number, "*", number-1)
  return number * factorial(number - 1)

print(factorial(2))