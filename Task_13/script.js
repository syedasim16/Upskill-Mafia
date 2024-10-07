function maxarray(arr){

        arr.sort( (a, b)=>{

            return b-a;
        })

        console.log(arr[0])


}


function sumofall(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum = value + sum;
    });
        

 
    console.log(sum)
}

function oddnumber(arr){
    let counter = 0;
    arr.forEach((value) => {
        if(value%2!=0){
            counter +=1;
        }
    });

    console.log("Total number or Odd nums: " +counter)


}




maxarray([4,8, 2, 11, 6, 7, 10,])
sumofall([4,8, 2, 11, 6, 7, 10,])
oddnumber([4,8, 2, 11, 6, 7, 10,])

