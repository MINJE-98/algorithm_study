# 메모제이션
n = int(input()) #n번째 수
memo = [0] * 201;
def Fibonacci(n):
  if n == 0:
    return 0;
  if n == 1 or n == 2:
    return 1;
  if memo[n] == 0:
    memo[n] = Fibonacci(n - 2) + Fibonacci(n - 1)
  return memo[n]
print(Fibonacci(n) % 10009)

# keypoint
# 이미 접근한 데이터는 메모제이션기법을 이용하여 배열에 저장해둔다.
# 그러면 다시 접근해야할 데이터는 재귀를 통해 연산하지않고 배열에서 데이터를 꺼내서 사용할 수 있다.