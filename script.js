$(function(){
    var vez = 1;
var vencedor = "";
var confirmacao = confirm("Click em OK para inserir o nome dos jogadores");
if(confirmacao == 1){
var Player1 = prompt("Digite o nome do jogador1");
alert("Voce sera o X");
var Player2 = prompt("Digite o nome do jogador2");
alert("Voce sera a O");
}
function casasIguais(a, b, c){
    var casaA = $("#casa"+a);
    var casaB = $("#casa"+b);
    var casaC = $("#casa"+c);
    var bgA = $("#casa"+a).css("background-image");
    var bgB = $("#casa"+b).css("background-image");
    var bgC = $("#casa"+c).css("background-image");
    if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
        if(bgA.indexOf("1.jpg") >= 0)
            vencedor = Player1;
        else
            vencedor = Player2;
        return true;
    }
    else{
        return false;
    }
}
function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
        $("#resultado").html("<h1>" + vencedor + " venceu! </h1>");
        $(".casa").off("click");
    }
}
$(".casa").click(function(){
    var bg = $(this).css("background-image");
    if(bg == "none" || bg == "")
    {          
        var fig = "url(" + vez.toString() + ".jpg)";
        $(this).css("background", fig);
        vez = (vez == 1? 2:1); 
        verificarFimDeJogo();
    }
});

    });