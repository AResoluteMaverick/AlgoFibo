function mergeSort(arr) {
    if (arr.length === 1) return arr;
  
    const halved = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, halved);
    const secondHalf = arr.slice(halved);
  
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  
  function merge(firstHalf, secondHalf) {
    let newSort = [];
    let i = 0, j = 0;
  
   while (i < firstHalf.length || j < secondHalf.length) {
      if (i === firstHalf.length) {
        newSort.push(secondHalf[j]);
        j++;
      } else if (j === secondHalf.length) {
        newSort.push(firstHalf[i]);
        i++;
      } else if (firstHalf[i] < secondHalf[j]) {
        newSort.push(firstHalf[i]);
        i++;
      } else {
        newSort.push(secondHalf[j]);
        j++;
      }
    }
  
    return newSort;
  }
  
  const arr = [8, 10, 2, 7, 1, 9, 3];
  const sortedArr = mergeSort(arr);
  console.log(sortedArr);