n = int(input())

def answer(s):
  if s <= 0:
    return
  print(s)
  answer(s - 1)

answer(n)