import sys
sys.setrecursionlimit(100000) # 재귀호출 리밋 지정
n = int(input())
def answer(s):
  if s <= 0:
    return 0
  return s + answer(s - 1)

print(answer(n))

# keypoint
# 파이썬은 재귀호출의 맥스값을 지정할 수 있다.