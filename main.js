function addUser(){
    player1_name=document.getElementById(input_1).value;
    player2_name=document.getElementById(input_2).value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.loacation.replace("game_page.html");
}

