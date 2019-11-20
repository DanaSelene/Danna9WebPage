// 下面的JS是写给button: back to top的
//Get the button
var mybutton = document.getElementById("myBtn");

//When the user scrolls down 20px from the top of the document, show the button
window.onscroll=function(){
    scrollFunction()
};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
      }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }





// //   下面开始的JS是写给首页video tag的（在有趣功能区里）--双重comment，因为这段code只会在internal的时候工作，即 only works when it is
    //  an internal js code

// var myVideo = document.getElementById("video1"); 

// function playPause() { 
//   if (myVideo.paused) 
//     myVideo.play(); 
//   else 
//     myVideo.pause(); 
// } 

// function makeBig() { 
//     myVideo.width = 920; 
// } 

// function makeSmall() { 
//     myVideo.width = 420; 
// } 

// function makeNormal() { 
//     myVideo.width = 720; 
// } 
