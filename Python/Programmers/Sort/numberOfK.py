def solution(array, commands):
  result = []
  for command in commands:
    tempArray = (array[command[0]-1:command[1]])
    tempArray.sort()
    result.append(tempArray[command[2]-1])
  print(result)
    


array = [1, 5, 2, 6, 3, 7, 4]
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
solution(array, commands)