let water = 0   

const gevoelbtn = document.querySelectorAll(".gevoel");
const gevoeltext = document.querySelector("#gevoelText"); 
const etenbtn = document.querySelectorAll(".eten");
const etentext = document.querySelector("#etenText");
const energiebtn = document.querySelectorAll(".energie");
const energietext =  document.querySelector("#energieText");
const stressbtn = document.querySelectorAll(".stress");
const stresstext = document.querySelector("#stressText");
const waterbtn = document.querySelector("#waterBtn");
const watertext = document.querySelector("#waterText");
const resetbtn = document.querySelector("#resetBtn");
const timerbtn  = document.querySelector("#timerBtn");
const timertext = document.querySelector("#timerText");
const darkbtn = document.querySelector("#darkBtn");
const checkbtn = document.querySelector("#checkBtn");
const checktext = document.querySelector("#finalText");
const nameinput = document.querySelector("#nameInput");
const greeting =  document.querySelector("#greeting");


window.addEventListener("load", function(){


  nameinput.addEventListener("keyup", function(){
    greeting.innerText = "Hallo " + nameinput.value  
  });



  gevoelbtn.forEach(function(btn){

    btn.addEventListener("click", function(){

      gevoeltext.innerText = btn.innerText


      for(let i = 0; i < gevoelbtn.length; i++){
        gevoelbtn[i].classList.remove("active")
      }

      btn.classList.add("active")   

    })

  });


  etenbtn.forEach((btn)=>{

    btn.addEventListener("click", ()=>{

      etentext.innerText = btn.innerText   

      etenbtn.forEach(function(x){
        x.classList.remove("active")
      })

      btn.classList.add("active")

    })

  });



  for(let i = 0; i < energiebtn.length; i++){

    energiebtn[i].addEventListener("click", function(){

      energietext.innerText = energiebtn[i].innerText

      for(let j = 0; j < energiebtn.length; j++){
        energiebtn[j].classList.remove("active")
      }

      energiebtn[i].classList.add("active")

    })

  };


 
  stressbtn.forEach(function(btn){

    btn.addEventListener("click", function(){

      if(btn.innerText == "Veel te gestresseerd"){
        stresstext.innerText = "Probeer een beetje te ontspannen"
      }
      else{
        stresstext.innerText = btn.innerText
      }

      stressbtn.forEach(function(s){
        s.classList.remove("active")
      })

      btn.classList.add("active")

    })

  });



  waterbtn.addEventListener("click", function(){

    water = water + 1  

    if(water >= 4){
      watertext.innerText = "Super! Kei goed " + water + " glazen"
    }
    else{
      watertext.innerText = water + " glazen"  
    }

  });



  resetbtn.addEventListener("click", function(){

    water = 0
    watertext.innerText = "0 glazen"

    console.log("reset")   

  });



  timerbtn.addEventListener("click", function(){

    timertext.innerText = "Adem in..."

    setTimeout(function(){
      timertext.innerText = "Adem uit..."
    },2500)

    setTimeout(function(){
      timertext.innerText = "Klaar!"
    },5000)

  });


  darkbtn.addEventListener("click", function(){
    document.body.classList.toggle("dark")   
  });


  checkbtn.addEventListener("click", function(){

    if(stresstext.innerText == "Probeer een beetje te ontspannen"){
      checktext.innerText = "Geen stress, morgen beter!"
    }
    else{
      checktext.innerText = "Super gedaan vandaag!"
    }

  })


});