const insertionSort = (array) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array.unshift());
    if (newArray.length === 1) break;
    for (let i = newArray.length - 1; i > 0; i--) {
      if (newArray[i - 1] > newArray[i]) {
        [newArray[i - 1], newArray[i]] = [newArray[i], newArray[i - 1]];
      }
    }
  } 
  return newArray;
}

export default insertionSort; 

