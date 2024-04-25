
function star1(a, n) {
  let pointer = 0;
  for (let i = 0; i <= n; i++) {
   let space = ' '.repeat(n - i);
   let pattern = '';
   for (let j = 0; j < i; j++) {
    pattern += a[pointer];
    if (pointer >= a.length - 1) {
     pointer = 0;
    } else {
     pointer++;
    }
   }
   console.log(space + pattern);
  }
  for (let i = 1; i < 2; i++) {
   let pipe = '|';
   console.log(" ".repeat(n-1) + pipe);
   console.log(' '.repeat(n-1) + pipe);
  }
 }
 let a = ['@ ', '* ', '& '];
 star1(a, 20);