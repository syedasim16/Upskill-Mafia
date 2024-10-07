let number = 153;
let sum1 = 0;

while(number>0){
    
    let rem = number % 10;//extracting last digit
    sum1 = sum1 + rem; // adding its digit into new container
    number = Math.floor(number / 10);//updating the number value
    
}

console.log("Sum of all digits: " + sum1)


//------------------------------------------------------------------------


//Checking Armstrong Number or not

let number2 = 153; // making new variable because its alredy updated in our last block of code
let sum2 = 0;
let temp = number2;

while(temp>0){ 
    
    let rem = temp % 10;//extracting last digit
    sum2 += rem**3 ;// cube of the extracted digit
    temp = Math.floor(temp / 10);//updating the number value
    
}

 
if(sum2==number2){
    console.log("Is it an Armstrong number?  Yes")
}
else{
    console.log("Is it an Armstrong number?  No")
}

//------------------------------------------------------------------------

//Checking Prime Number or Not

 let number3 = 153;

if(number3 / number3 === 0 && number3 / 1 == 0){
    console.log("Is it a prime number? Yes")
}
else{
    console.log("Is it a prime number? No")
}

//------------------------------------------------------------------------

//Print all its factors.

let number4 = 153;
let fact = 0;
for(let i =1; i<=number4;i++){
    if(number4%i==0){
        console.log("All its factors: " +i)
        
    }
}


    