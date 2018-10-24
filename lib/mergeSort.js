function mergeSort(array) {
  // console.log('mergeSort ', array); // for tracing stack
  if (array.length <= 1) return array;

  const middleIndex = Math.floor(array.length / 2);
  let leftSide = array.slice(0, middleIndex);
  let rightSide = array.slice(middleIndex);

  leftSide = mergeSort(leftSide);
  rightSide = mergeSort(rightSide);
  
  const result = merge(leftSide, rightSide);
  // console.log('mergeSort result ', result); // for tracing stack
  return result;
}

function merge(leftSide, rightSide) {
  // console.log('merge ', leftSide, ' ', rightSide); // for tracing stack
  var result = [];

  while (leftSide.length > 0 && rightSide.length > 0) {
    if (leftSide[0] <= rightSide[0]) {
      result.push(leftSide.shift());
    } else {
      result.push(rightSide.shift());
    }
  }
  
  while (leftSide.length > 0) {
    result.push(leftSide.shift());
  }
  while (rightSide.length > 0) {
    result.push(rightSide.shift());
  }
  
  // console.log('merge result ', result); // for tracing stack
  return result;
}

export default mergeSort;

