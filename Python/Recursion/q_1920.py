n = int(input()) # 주어진 숫자

def two(n):
  if n == 0:
    print(0)
  if n < 1:
    return 1
  two(n/2)
  print(int(n%2), end="")

two(n)

# key point
# 2진수를 구하는 방법
# 1. 입력된 값을 2로 나눈다.
# 2. 2로 나눈값을 2로 나누어 나머지를 구한다.

