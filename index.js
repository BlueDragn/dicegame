
let z = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
let x = Math.floor((Math.random() * z.length)+1);
let y = Math.floor((Math.random() * z.length)+1);



document.querySelector(".img1").setAttribute("src",z[x-1]);
document.querySelector(".img2").setAttribute("src",z[y-1]);



   if(x>y){
    document.querySelector("h1").innerHTML = "&#128681 player 1 Wins";
  }
  else if (x<y) {
    document.querySelector("h1").innerHTML ="player 2 Wins &#128681";
  }
  else{
    document.querySelector("h1").innerHTML ="	&#127987 Draw 	&#127987";
  }
