function searchFun() {
    
    var data = document.getElementById('inputText').value.toUpperCase();

    
    var name = document.getElementById('name').innerHTML.toUpperCase();

    
    var heading = document.getElementById("heading"); 

    
    var cardwrapper = document.getElementsByClassName("card-wrapper")[0]; 

    
    let cards = cardwrapper.getElementsByClassName("card");

    
    for (let i = 0; i < cards.length; i++) {
       
        let cardText = cards[i].textContent || cards[i].innerText;

        
        cardText = cardText.toUpperCase();

       
        if (cardText.includes(data)) {
            
            cards[i].style.display = "";
        } else {
            
            cards[i].style.display = "none";
        }
    }
}










// const names = students.filter((curValue, index, array)=>{

//     if(curValue.name =="Uzui")return curValue.name
//     else return false;
    
// })

// console.log(names);