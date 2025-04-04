
const clickbtn = document.querySelector("#toggleButton");
const bulb = document.querySelector('.bulb');
const off = document.querySelector("#status");
const textChange = document.querySelectorAll(".statusText");
const background = document.querySelector(".container");

 
clickbtn.addEventListener('click', () => {

    bulb.classList.toggle("off");

   if(bulb.classList.contains("off"))
   {
        clickbtn.innerText = "turn on";
        off.innerText = "Status:off";
        textChange.forEach((n) => (n.style.color = "black"));
        background.style.backgroundColor = "white";
   }
   else{

     clickbtn.innerText = "turn off";
       off.innerText = "Status:on";
 textChange.forEach((n) => (n.style.color = "white"));
         background.style.backgroundColor = "#333";

   }
});




