let randomNumber1 = Math.floor(Math.random() * 6)+1;
let picname = "images/"+"dice"+randomNumber1.toString(10)+".png";
document.querySelector('.img1').setAttribute("src", picname);

let randomNumber2 = Math.floor(Math.random() * 6)+1;
let picname2 = "images/"+"dice"+randomNumber2.toString(10)+".png";
document.querySelector('.img2').setAttribute("src", picname2);

if (randomNumber1>randomNumber2){
    document.querySelector('h1').textContent="🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
    document.querySelector('h1').textContent="Player 2 Wins!🚩";
}else{
    document.querySelector('h1').textContent="Tie!Hit Refresh To play again";
}
