
let z = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
let x = Math.round((Math.random() * z.length)+1);
let y = Math.round((Math.random() * z.length)+1);



document.getElementById("img1").setAttribute("src",z[x-1]);
document.getElementById("img2").setAttribute("src",z[y-1]);
