
let lightSwitch = document.querySelector("button");
let bulb = document.getElementById("lightBulb");
let bball = document.getElementById("basketball");
let header = document.querySelector("h1");
let quote = document.getElementById("quote");

lightSwitch.addEventListener('click', function(event) {

   if (bulb.src.match("images/lightOff.png")) {
         bulb.src = "images/lightOn.png";
         document.body.style.backgroundColor = "white";
         lightSwitch.innerText = 'ON';
         lightSwitch.style.backgroundColor = "green";
         bulb.style.visibility = "visible";
         bulb.style.color = "yellow";
         bball.style.visibility = "hidden";
         header.style.visibility = "visible";
         quote.style.visibility = "hidden";
          
      } else if (bulb.src.match("images/lightOn.png")) {
            bulb.src = "images/lightOff.png";
            document.body.style.backgroundColor = "gray";
            lightSwitch.innerText = 'OFF';
            lightSwitch.style.backgroundColor = "";
            bulb.style.visibility = "hidden";
            bball.style.visibility = "visible";
            header.style.visibility = "hidden";
            quote.style.visibility = "visible";
         }
})