$(function(){
    var vez = 1;
    var vencedor = "";
    var Player1 = "";
    var Player2 = "";

    $("#btnIniciar").click(function(event){
        event.preventDefault();
        Player1 = $("#player1").val();
        Player2 = $("#player2").val();

        if(Player1 === "" || Player2 === "") {
            alert("Por favor, insira os nomes dos dois jogadores.");
            return;
        }

        alert(Player1 + " será o X");
        alert(Player2 + " será o O");

        // Redirecionar para a página do jogo, se for o caso
        window.location.href = "./game.html";
    });

    function casasIguais(a, b, c){
        var casaA = $("#casa"+a);
        var casaB = $("#casa"+b);
        var casaC = $("#casa"+c);
        var bgA = $("#casa"+a).css("background-image");
        var bgB = $("#casa"+b).css("background-image");
        var bgC = $("#casa"+c).css("background-image");
        if( (bgA == bgB) && (bgB == bgC) && (bgA != "none" && bgA != "")){
            vencedor = (bgA.indexOf("1.jpg") >= 0) ? Player1 : Player2;
            return true;
        } else {
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
        if(bg == "none" || bg == "") {          
            var fig = "url(" + vez.toString() + ".jpg)";
            $(this).css("background", fig);
            vez = (vez == 1 ? 2 : 1); 
            verificarFimDeJogo();
        }
    });

});