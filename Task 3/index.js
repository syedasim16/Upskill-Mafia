let stat = 0;
function changeImage(){
    
    var btn = document.querySelector("#btn")
    var img = document.querySelector("#image");
    if (stat==0){
        img.src="catsmile.jpg";
        btn.innerText = "😋😋😋😋"
        stat=1
    }
    else{
        img.src="cat.jpg";
        btn.innerText = "😔😔😔😔"
        stat=0
    }
    
}
