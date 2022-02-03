function merge (left, right) {
    const result = [];
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        result.push(left.shift());
      }
      else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while(right.length) {
      result.push(right.shift());
    }
    return result;
  }
  
  function mergeSort (input) {
    if (input.length < 2) {
      return input;
    }
    const middle = parseInt(input.length / 2);
    const left = input.slice(0, middle);
    const right = input.slice(middle, input.length);
    return merge(mergeSort(left), mergeSort(right));
  }

let data = [3,4,1,2,7,6,8]
const result = mergeSort(data)
console.log(result);