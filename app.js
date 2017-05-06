
// 0=o's 1=x's
var playerState = 0;
// 0=o's, 1=x's 2=two players
var computerState = 1;
var playertwo = 1;
var whosTurn = 0;
var playerScore = 0;
var computerScore = 0;
var catScore = 0;
var moves = 0;

var winningArr = [[3,5,7],[4,5,6],[1,5,9],[2,5,8],[1,4,7],[3,6,9],[1,2,3],[7,8,9]]
var aiMoves = [5,1,7,3,9,2,4,8,6];

function writeMove(str){
  if ($(str).children("p").html() === "") {

    return "yes"
  }else{
    return "blocked"
  }
}

function catsGame(){
  catScore += 1
  $(".cats-score").html("Cats Game: " + catScore);
  clearBoard()
}

function computerMove(){
  var player = canSomeoneWin(playerState);
  var computer = canSomeoneWin(computerState);
  if(computer != "no"){
    if(computerState == 0){
      $("#box" + computer).children("p").html("O")
    }else{
      $("#box" + computer).children("p").html("X")
    }
  }else if(player != "no"){
    if(computerState == 0){
      $("#box" + player).children("p").html("O")
    }else{
      $("#box" + player).children("p").html("X")
    }
  }else{
    for(var i = 0; i < aiMoves.length; i++){
      var check = writeMove("#box" + aiMoves[i]);
      if(check != "blocked"){
        if(computerState == 0){
          $("#box" + aiMoves[i]).children("p").html("O")
        }else{
          $("#box" + aiMoves[i]).children("p").html("X")
        }
        break;
      }
    }
  }
}

function canSomeoneWin(state){
  var string = "";
  var results ="no";
  if(state == 0){
    string = "O"
  }else{
    string = "X"
  }
  for (var i = 0; i < winningArr.length; i++) {
    results = checkLine(winningArr[i], string)
    if(results != "no"){
      var test = writeMove("#box" + results)
      if(test != "blocked"){
        return results;
      }
    }
  }
  return "no"
}

function winCheck(arr, state){
  var amount = 0;
  if(state == 0){
    string = "O"
  }else{
    string = "X"
  }
  for (var j = 0; j < arr.length; j++) {
      for(var i=0; i < arr[j].length; i++ ){
        if($("#box" + arr[j][i]).children("p").html() === string){
        amount +=1;
        }
      }
      if(amount == 3){
        return arr[j]
      }else{
        amount = 0
      }
    }
    return "no"
  }

function winner(arr, player){
  var color = 0
  var winTimer = 0;
  console.log(player)
  if(player == "player1"){
    playerScore += 1
    $(".player-score").html("player 1: " + playerScore)
  }else if(player == "player2"){
    computerScore += 1
    $(".computer-score").html("player 2: " + computerScore)
  }else{
    computerScore += 1
    $(".computer-score").html("Computer: " + computerScore)
  }

  var timer = setInterval(function(){
    if(winTimer == 6){
      clearInterval(timer)
      clearBoard()
    }else if(color == 0){
      $("#box" + arr[0]).css("background-color", "#D6B9B2");
      $("#box" + arr[1]).css("background-color", "#D6B9B2");
      $("#box" + arr[2]).css("background-color", "#D6B9B2");
      color = 1;
      winTimer += 1;
    }else{
      $("#box" + arr[0]).css("background-color", "#B4C3A2");
      $("#box" + arr[1]).css("background-color", "#B4C3A2");
      $("#box" + arr[2]).css("background-color", "#B4C3A2");
      color = 0;
      winTimer += 1;
    }

  }, 400)
}

function activeButton(active, deactive){
  $(active).removeClass("button-deactive");
  $(active).addClass("button-active");
  $(deactive).removeClass("button-active");
  $(deactive).addClass("button-deactive");
}

function checkLine(arr, str){
  var amount = 0;
  for(var i=0; i < arr.length; i++ ){
    if($("#box" + arr[i]).children("p").html() == str){
    amount +=1;
    }
  }
  if(amount == 2){
    for(var i=0; i < arr.length; i++ ){
      if($("#box" + arr[i]).children("p").html() != str){
        return arr[i];
      }
    }
  }else{
    return "no"
  }
}

function clearBoard(){
  for (var i = 1; i < 10; i++) {
    $("#box" + i).children("p").html("");
  }
  moves = 0;
}

function clearScore(){
  $(".player-score").html("player 1: 0");
  $(".computer-score").html("computer: 0");
}

$(document).ready(function(){
 $(".zone").on("click", function(){
   if(computerState != 2){
     if(playerState == 0){
       if($(this).children("p").html() == ""){
         $(this).children("p").html("O")
         moves += 1;
         if(winCheck(winningArr, playerState) != "no"){
           winner(winCheck(winningArr, playerState), "player1")
         }else if(moves == 9){
           catsGame()
         }else{
           computerMove()
           moves += 1;
           if(winCheck(winningArr, computerState) != "no"){
             winner(winCheck(winningArr, computerState), "computer")
           }
         }
       }
   }else{
     if($(this).children("p").html() == ""){
       $(this).children("p").html("X")
       moves += 1;
       if(winCheck(winningArr, playerState) != "no"){
         winner(winCheck(winningArr, playerState), "player1")
       }else if(moves == 9){
         catsGame()
       }else{
         computerMove()
         moves += 1;
         if(winCheck(winningArr, computerState) != "no"){
           winner(winCheck(winningArr, computerState), "computer")
         }
       }
     }
   }
   }else{
     if(whosTurn == 0){
       if($(this).children("p").html() == ""){
         $(this).children("p").html("O")
         moves += 1;
         if(winCheck(winningArr, playerState) != "no"){
           winner(winCheck(winningArr, playerState), "player1")
         }else if(moves == 9){
           catsGame()
         }
         whosTurn = 1;
       }
     }else{
       if($(this).children("p").html() == ""){
         $(this).children("p").html("X")
         moves += 1;
         if(winCheck(winningArr, playertwo) != "no"){
           winner(winCheck(winningArr, playertwo), "player2")
         }else if(moves == 9){
           catsGame()
         }
         whosTurn = 0
       }
     }
   }

  })
  $("#settings").on("click", function(){
    $("#choose").addClass("active");
  })
  $("#close").on("click", function(){
    $("#choose").removeClass("active");
  })
  $("#play-o").on("click", function(){
    activeButton( "#play-o", "#play-x")
    playerState = 0;
    computerState = 1;
  })
  $("#play-x").on("click", function(){
    activeButton("#play-x", "#play-o")
    playerState = 1;
    computerState = 0;
  })
  $("#one-player").on("click", function(){
    clearBoard()
    clearScore()
    activeButton("#one-player", "#two-player")
    if(playerState == 1){
      computerState = 0
    }else{
      computerState = 1
    }
  })
  $("#two-player").on("click", function(){
    clearBoard()
    clearScore()
    activeButton("#two-player", "#one-player")
    playerState = 0;
    computerState = 2;
    $(".computer-score").html("Player 2: 0")
  })


})
