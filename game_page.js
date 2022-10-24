Player1Name= localStorage.getItem("Player1Name");
Player2Name= localStorage.getItem("Player2Name");
document.getElementById("Player1Name").innerHTML=Player1Name+" : ";
document.getElementById("Player2Name").innerHTML=Player2Name+" : ";
Player1Score= 0;
Player2Score= 0;
document.getElementById("Player1Score").innerHTML=Player1Score+" : ";
document.getElementById("Player2Score").innerHTML=Player2Score+" : ";

document.getElementById("PlayerQuestion").innerHTML="Turno de Pergunta - "+ Player1Name;
document.getElementById("PlayerAnswer").innerHTML="Turno de Resposta - "+Player2Name;
function send(){
    getNumber1= document.getElementById("number1").value;
    getNumber2= document.getElementById("number2").value;
    Answer=parseInt(getNumber1)*parseInt(getNumber2)  
}