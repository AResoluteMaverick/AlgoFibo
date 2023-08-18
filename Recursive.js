function fibs(n) {
  let f0 = 0, f1 = 1, sum, arr = [0];
  
  if (n <= 0) return [0]

  for (i = 1; i < n; i++){
    sum = f0 + f1;
    f1 = f0;
    f0 = sum;
    
    arr.push(sum);
  }
  
  return arr;
}

function fibRecursive(n, total, f0 = 0, f1 = 1, arr = [0]) {
  if (n <= 1) return arr
  
  let copy = arr;
 
  total = f0 + f1;
  f1 = f0;
  f0 = total;
  copy.push(total);
  
  return fibRecursive(n - 1, total, f0 , f1, copy)
}