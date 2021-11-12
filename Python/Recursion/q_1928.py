stack = []
def solution(n):
  if n <= 1:
    return
  if n % 2 != 0:
    stack.append(int(3 * n + 1))
    solution(3 * n + 1)
  if n % 2 == 0:
    stack.append(int(n / 2))
    solution(n / 2)
  print(stack.pop())


n = int(input())
solution(n)
print(n)

# keypoint 
# 재귀함수가 마지막까지 실행된 후 print()함수가 실행되는것을 생각하면쉽게 풀 수 있다.
# 나오는 결과값을 모두 stack에 넣은 후 마지막에 pop하여 마지막에 넣은 데이터 순으로 출력하면 되는 문제이다.