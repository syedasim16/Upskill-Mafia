

const divide=(num1, num2)=>{
    return new Promise((resolve, reject)=>{
        if(num2===0){
            reject("Error: Division by zero is not allowed")
        }
        else{
            const result =num1/num2
            resolve(result)
        }
    })

}


const test=async()=>{
    const cases=[ { num1: 18, num2: 0},{ num1: 21, num2: 3 }, { num1: 8, num2: 0 },  { num1: 9, num2: 3 },  { num1: 40, num2: 5 }]
        
    for(const {num1, num2} of cases)
        // console.log("num1", num1, ":", "num2", num2)     
            try{
                const output= await divide(num1, num2)
                console.log(`Dividing ${num1} by ${num2} = ${output}`)

            }
            catch(err){
                console.log(err)

            }
}


test( )


