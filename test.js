// function factorial(n){
//     var res = 1;
//     for(var i=n; i>=1; i--){
//       res = res * i;
//!      5= 1 * 5
//!      20 = 5 * 4
//!      60 = 20 * 3
//!      120 = 60 * 2
//!      120 = 120 * 1 
//         console.log(res)       
//     }
//     return res;
//   }

function factorial(n) {
  if (n<=1) return 1;
  
  return n* factorial(n-1);
}

  console.log(factorial(5))