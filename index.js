let mainImg=document.querySelector(".Main-image")
let smallImg=document.querySelectorAll(".small-image")
//
let seeMoreBtn=document.querySelectorAll("toggle-button")
let seeMoreLetter=document.querySelectorAll(".toggle-letter")


    


smallImg[0].onclick=function(){
    mainImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    mainImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    mainImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    mainImg.src=smallImg[3].src;
}
//see more see less
