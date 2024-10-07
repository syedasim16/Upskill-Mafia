
//   With formula  A=P(1+(r/n))^nt  

let principal = 40000; 
let rate = 5; 
let years = 10; 

let compoundInterest = principal * Math.pow((1 + rate/100), years);

let result = compoundInterest - principal;

console.log(result) 
