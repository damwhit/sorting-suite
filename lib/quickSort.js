const quickSort = (array) => {
  if (array.length <= 1) return array;
  const pivot = array.pop();
  const leftSide = [];
  const rightSide = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pivot) {
      leftSide.push(array[i]);
    } else {
      rightSide.push(array[i]);
    }
  }

  return [...quickSort(leftSide), pivot, ...quickSort(rightSide)];
}

export default quickSort;

