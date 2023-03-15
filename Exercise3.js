//Part1 and 2
let xValue = 101;
while (xValue >= 1) {
    if (xValue % 2 !== 0 && xValue <=100) {
  console.log(xValue);
    } 
  xValue -= 0.5;
}


//Part3
const loop =(n) =>  {
   
    let i = 1;
    while (i <= n) {
      console.log('['+i+']');
      i++;
    }
}

loop(6);



//Part4
const sumN =(n) => {
    let sum = 0;
    let i = 1;
    while (i <= n) {sum = sum + i; i++;}
    return sum;
  }

  console.log(sumN(5));
  console.log(sumN(19));