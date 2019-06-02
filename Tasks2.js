.........................................................................................................................................
-1- A function which prints str after n seconds.




.........................................................................................................................................

-2- A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) { 
  if(n == 1) return 1;
  return n + sumAll(n - 1);
  }
console.log(sumAll(2));
console.log(sumAll(4));

..........................................................................................................................................

-3- A function which takes str and time in seconds as arguments, then every second it should count down from time to 0 
and print current time to console when time equals to 0 it prints str




...........................................................................................................................................
