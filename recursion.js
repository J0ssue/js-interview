const iterativeFactorial = (n) => {
  let result = 1;
  while(n > 0) {
    result *= n;
    n -= 1;
  }
  return result;
}

const recursiveFactorial = (n) => {
  if (n === 0) {
    return 1
  }

  if (n > 0) {
    console.log(`Execution context: ${n}`);
    
    return n * recursiveFactorial(n - 1);
  }
}

// const recursiveSolution = recursiveFactorial(4);
// console.log(recursiveSolution);

// Set fourFactorial
// const fourFactorial = iterativeFactorial(5)
// console.log(fourFactorial)