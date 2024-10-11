var box1 = document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")



var btn     = document.querySelector("#btn")
var output     = document.querySelector("#navbar")
var input   = document.querySelector("#inputtext")


let isStatus = 0;


btn.addEventListener('click', () =>{

        output.innerHTML = "Hello, "+input.value   
        
})


















function red(){
    if(isStatus == 0){
        {
            
            box1.style.backgroundColor= "red"; 
            isStatus = 1;
        };
    
    }else{
        box1.style.backgroundColor= "white"; 
        isStatus = 0;
    }
    
}







function green(){
    if(isStatus == 0){
        {
            
            box2.style.backgroundColor= "green"; 
            isStatus = 1;
        };
    
    }else{
        box2.style.backgroundColor= "white"; 
        isStatus = 0;
    }
};

function blue(){
    if(isStatus == 0){
        {
            
            box3.style.backgroundColor= "blue"; 
            isStatus = 1;
        };
    
    }else{
        box3.style.backgroundColor= "white"; 
        isStatus = 0;
    }
    
};

function yellow(){
    if(isStatus == 0){
        {
            
            box4.style.backgroundColor= "yellow"; 
            isStatus = 1;
        };
    
    }else{
        box4.style.backgroundColor= "white"; 
        isStatus = 0;
    }
};



