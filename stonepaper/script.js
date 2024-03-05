// take input from user

function player_input(){
    let player=prompt("Choose: Rock, Paper or Scissor.");
    return player;
}

// random choice for computer

function computer_choice(){
    let choices=["rock","paper","scissor"];
    let computer=Math.floor(Math.random() * choices.length);
    return choices[computer];
}

// result of 1 round game

function round_result(computer,player){
    if(computer===player){
        alert("Draw!")
    }
    else{
        if(computer=="rock"){
            if(player=="paper"){
                ++player_wins;
            }
            else{
                ++computer_wins;
            }
        }
        else if(computer=="paper"){
            if(player=="scissor"){
                ++player_wins;
            }
            else{
                ++computer_wins;
            } 
        }
        else{
            if(player=="rock"){
                ++player_wins;
            }
            else{
                ++computer_wins;
            }
        }
    }
}

// final result

function final_result(computer,player,draw){
    if(computer > player){
        alert("Computer wins the game!");
    }
    else if(computer < player){
        alert("Player wins the game!");
    }
    else{
        alert("Match is draw!");
    }
}

// game body

function game(){
    let rounds = Number(prompt("How many times do you want to play:"));
    
    for(i=1;i<=rounds;i++){
        round_result(computer_choice(),player_input());
    }
    final_result(computer_wins,player_wins,draw);
}

// main function

let computer_wins=0,player_wins=0,draw=0;
game();