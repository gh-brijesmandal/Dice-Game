if (performance.getEntriesByType("navigation")[0].type == "reload")  // asking browser what type of navigation are we doing? 
{
let randomVar1 = Math.ceil(Math.random() * 6)
let randomImage1 = "./images/dice" + randomVar1 + ".png";
document.querySelector('.img1').setAttribute('src',randomImage1);

let randomVar2 = Math.ceil(Math.random() * 6);
let randomImage2 = "./images/dice" + randomVar2 + ".png";
document.querySelector('.img2').setAttribute('src',randomImage2);

if (randomVar1 > randomVar2)
{
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomVar2 > randomVar1)
{
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else
{
    document.querySelector("h1").textContent = "Draw!";
}
}
else
{
    document.querySelector('h1').innerHTML = "Refresh Me";
    document.querySelectorAll('img')[0].src = "./images/dice6.png";
    document.querySelectorAll('img')[1].src = "./images/dice6.png";
}