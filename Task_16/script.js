function searchFun() {
    
    var data = document.getElementById('inputText').value.toUpperCase();

   
    var cardwrapper = document.getElementsByClassName("card-wrapper")[0];

   
    let cards = Array.from(cardwrapper.getElementsByClassName("card")); 

    
    cards.map(card => {
        
        let cardText = (card.textContent || card.innerText).toUpperCase();

        
        card.style.display = cardText.includes(data) ? "" : "none";
    });
}









// const names = students.filter((curValue, index, array)=>{

//     if(curValue.name =="Uzui")return curValue.name
//     else return false;
    
// })

// console.log(names);