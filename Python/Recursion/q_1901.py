n = int(input())

def answer(s):
  if s <= 0:
    return
  answer(s - 1)
  print(s)

answer(n)