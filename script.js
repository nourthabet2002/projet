let heart_btn= document.getElementsByClassName("heart_btn")

for (let index = 0; index < heart_btn.length; index++){
  
    heart_btn[index].addEventListener("click", function(){
      if(heart_btn[index].style.color==="red"){
        heart_btn[index].style.color="black"
      }
      else{
        heart_btn[index].style.color="red"
      }
    })
}
