a, b = map(int, input().split())

def answer(x, y):
  if(x > y):
    return
  if x % 2 != 0:
    print(x, end=" ")
  answer(x+1, y)

answer(a, b)