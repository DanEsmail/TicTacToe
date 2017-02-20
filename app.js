var winnerTimer = 0;
var winnerStatus = 0;
// set boxs: -1 = free / 0 = O / 1 = X;
//top boxes
var box1 = -1;
var box2 = -1;
var box3 = -1;
//middle boxes
var box4 = -1;
var box5 = -1;
var box6 = -1;
//bottom boxes
var box7 = -1;
var box8 = -1;
var box9 = -1;

//what the player is: 0 = O / 1 = X;
var playerStatus = 0;
//what the computer is: 0 = O / 1 = X;
var computerStatus = 1;

function writeMove(status, boxWrite) {
  if (status == 0) {
    $(boxWrite).html("O");
  } else {
    $(boxWrite).html("X")
  }
}

function winCheck(status) {
  if (box1 == status && box2 == status && box3 == status) {
    console.log("winner");
    winner("#top-left-corner", "#top-middle", "#top-right-corner")
  } else if (box4 == status && box5 == status && box6 == status) {
    console.log("winner")
    winner("#middle-left", "#center", "#middle-right")
  } else if (box7 == status && box8 == status && box9 == status) {
    console.log("winner")
    winner("#lower-left-corner", "#lower-middle", "#lower-right-corner")
  } else if (box1 == status && box4 == status && box7 == status) {
    console.log("winner")
    winner("#top-left-corner", "#middle-left", "#lower-left-corner")
  } else if (box2 == status && box5 == status && box8 == status) {
    console.log("winner")
    winner("#top-middle", "#center", "#lower-middle")
  } else if (box3 == status && box6 == status && box9 == status) {
    console.log("winner")
    winner("#top-right-corner", "#middle-right", "#lower-right-corner")
  } else if (box1 == status && box5 == status && box9 == status) {
    console.log("winner")
    winner("#top-left-corner", "#center", "#lower-right-corner")
  } else if (box3 == status && box5 == status && box7 == status) {
    console.log("winner")
    winner("#top-right-corner", "#center", "#lower-left-corner")
  }else if(box1 !== -1 && box2 !== -1 && box3 !== -1 && box4 !== -1 && box5 !== -1 && box6 !== -1 && box7 !== -1 && box8 !== -1 && box9 !== -1){
    console.log("no one wins")
    clearBoard()
  }
  else {
    console.log("no winner yet.");
    console.log(box1, box2, box3);
    console.log(box4, box5, box6);
    console.log(box7, box8, box9);
  }
}

function clearBoard() {
  box1 = -1;
  box2 = -1;
  box3 = -1;
  box4 = -1;
  box5 = -1;
  box6 = -1;
  box7 = -1;
  box8 = -1;
  box9 = -1;
  $(".button").html("<div><br></div>");
}

function winner(str1, str2, str3) {

  var color = 1;
  winnerStatus = 1;
  var breakout = setInterval(function() {
    console.log("i'm in")
    if (winnerTimer == 10) {
      clearInterval(breakout);
      winnerTimer = 0;
      winnerStatus = 0;
      clearBoard()

      $(str1).css("background-color", "lightblue");
      $(str2).css("background-color", "lightblue");
      $(str3).css("background-color", "lightblue");

    } else if (color == 1) {
      $(str1).css("background-color", "green");
      $(str2).css("background-color", "green");
      $(str3).css("background-color", "green");
      color = 0;
      winnerTimer += 1;
    } else {
      $(str1).css("background-color", "lightgreen");
      $(str2).css("background-color", "lightgreen");
      $(str3).css("background-color", "lightgreen");
      color = 1;
      winnerTimer += 1;
    }
  }, 250);

}

function canSomeoneWin(status) {
  if (box1 == status && box2 == status && box3 == -1) {
    return 1;
  } else if (box1 == status && box3 == status && box2 == -1) {
    return 2;
  } else if (box2 == status && box3 == status && box1 == -1) {
    return 3;
  } else if (box4 == status && box5 == status && box6 == -1) {
    return 4;
  } else if (box4 == status && box6 == status && box5 == -1) {
    return 5;
  } else if (box6 == status && box5 == status && box4 == -1) {
    return 6;
  } else if (box7 == status && box8 == status && box9 == -1) {
    return 7;
  } else if (box7 == status && box9 == status && box8 == -1) {
    return 8;
  } else if (box8 == status && box9 == status && box7 == -1) {
    return 9;
  } else if (box1 == status && box4 == status && box7 == -1) {
    return 10;
  } else if (box1 == status && box7 == status && box4 == -1) {
    return 11;
  } else if (box7 == status && box4 == status && box1 == -1) {
    return 12;
  } else if (box2 == status && box5 == status && box8 == -1) {
    return 13;
  } else if (box2 == status && box8 == status && box5 == -1) {
    return 14;
  } else if (box8 == status && box5 == status && box2 == -1) {
    return 15;
  } else if (box3 == status && box6 == status && box9 == -1) {
    return 16;
  } else if (box3 == status && box9 == status && box6 == -1) {
    return 17;
  } else if (box6 == status && box9 == status && box3 == -1) {
    return 18;
  } else if (box1 == status && box5 == status && box9 == -1) {
    return 19;
  } else if (box1 == status && box9 == status && box5 == -1) {
    return 20;
  } else if (box9 == status && box5 == status && box1 == -1) {
    return 21;
  } else if (box3 == status && box5 == status && box7 == -1) {
    return 22;
  } else if (box3 == status && box7 == status && box5 == -1) {
    return 23;
  } else if (box5 == status && box7 == status && box3 == -1) {
    return 24;
  } else {
    return false;
  }

  {

  }
}

function winBlock(num) {
  switch (num) {
    case 1:
      writeMove(computerStatus, "#top-right-corner")
      box3 = computerStatus
      break;
    case 2:
      writeMove(computerStatus, "#top-middle")
      box2 = computerStatus
      break;
    case 3:
      writeMove(computerStatus, "#top-left-corner")
      box1 = computerStatus
      break;
    case 4:
      writeMove(computerStatus, "#middle-right")
      box6 = computerStatus
      break;
    case 5:
      writeMove(computerStatus, "#center")
      box5 = computerStatus
      break;
    case 6:
      writeMove(computerStatus, "#middle-left")
      box4 = computerStatus
      break;
    case 7:
      writeMove(computerStatus, "#lower-right-corner")
      box9 = computerStatus
      break;
    case 8:
      writeMove(computerStatus, "#lower-middle")
      box8 = computerStatus
      break;
    case 9:
      writeMove(computerStatus, "#lower-left-corner")
      box7 = computerStatus
      break;
    case 10:
      writeMove(computerStatus, "#lower-left-corner")
      box7 = computerStatus
      break;
    case 11:
      writeMove(computerStatus, "#middle-left")
      box4 = computerStatus
      break;
    case 12:
      writeMove(computerStatus, "#top-left-corner")
      box1 = computerStatus
      break;
    case 13:
      writeMove(computerStatus, "#lower-middle")
      box8 = computerStatus
      break;
    case 14:
      writeMove(computerStatus, "#center")
      box5 = computerStatus
      break;
    case 15:
      writeMove(computerStatus, "#top-middle")
      box2 = computerStatus
      break;
    case 16:
      writeMove(computerStatus, "#lower-right-corner")
      box9 = computerStatus
      break;
    case 17:
      writeMove(computerStatus, "#middle-right")
      box6 = computerStatus
      break;
    case 18:
      writeMove(computerStatus, "#top-right-corner")
      box3 = computerStatus
      break;
    case 19:
      writeMove(computerStatus, "#lower-right-corner")
      box9 = computerStatus
      break;
    case 20:
      writeMove(computerStatus, "#center")
      box5 = computerStatus
      break;
    case 21:
      writeMove(computerStatus, "#top-left-corner")
      box1 = computerStatus
      break;
    case 22:
      writeMove(computerStatus, "#lower-left-corner")
      box7 = computerStatus
      break;
    case 23:
      writeMove(computerStatus, "#center")
      box5 = computerStatus
      break;
    case 24:
      writeMove(computerStatus, "#top-right-corner")
      box3 = computerStatus
      break;

  }

}

function computerMove() {
  var comTest = canSomeoneWin(computerStatus)
  console.log(comTest)
  if (comTest !== false) {
    winBlock(comTest);
  } else {
    var playerTest = canSomeoneWin(playerStatus)
    console.log(playerTest)
    if (playerTest !== false) {
      winBlock(playerTest);
    } else {
      if (box1 == -1) {
        writeMove(computerStatus, "#top-left-corner")
        box1 = computerStatus;
      } else if (box3 == -1) {
        writeMove(computerStatus, "#top-right-corner")
        box3 = computerStatus;
      } else if (box7 == -1) {
        writeMove(computerStatus, "#lower-left-corner")
        box7 = computerStatus;
      } else if (box9 == -1) {
        writeMove(computerStatus, "#lower-right-corner")
        box9 = computerStatus;
      } else if (box5 == -1) {
        writeMove(computerStatus, "#center")
        box5 = computerStatus;
      } else if (box2 == -1) {
        writeMove(computerStatus, "#top-middle")
        box2 = computerStatus;
      } else if (box4 == -1) {
        writeMove(computerStatus, "#middle-left")
        box4 = computerStatus;
      } else if (box6 == -1) {
        writeMove(computerStatus, "#middle-right")
        box6 = computerStatus;
      } else if (box8 == -1) {
        writeMove(computerStatus, "#lower-middle")
        box8 = computerStatus;
      } else {

      }
    }
  }

}
//board
$("#top-left-corner").click(function() {
  if (winnerStatus  == 0) {
    if (box1 == -1) {
      console.log("check")
      writeMove(playerStatus, "#top-left-corner");
      box1 = playerStatus;
      winCheck(playerStatus);
      computerMove();
      winCheck(computerStatus);
    }
  }
})
$("#top-middle").click(function() {
  if (winnerStatus == 0) {
    if (box2 == -1) {
      console.log("check")
      writeMove(playerStatus, "#top-middle");
      box2 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#top-right-corner").click(function() {
  if (winnerStatus == 0) {
    if (box3 == -1) {
      console.log("check")
      writeMove(playerStatus, "#top-right-corner");
      box3 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#middle-left").click(function() {
  if (winnerStatus == 0) {
    if (box4 == -1) {
      console.log("check")
      writeMove(playerStatus, "#middle-left");
      box4 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#center").click(function() {
  if (winnerStatus == 0) {
    if (box5 == -1) {
      console.log("check")
      writeMove(playerStatus, "#center");
      box5 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#middle-right").click(function() {
  if (winnerStatus == 0) {
    if (box6 == -1) {
      console.log("check")
      writeMove(playerStatus, "#middle-right");
      box6 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#lower-left-corner").click(function() {
  if (winnerStatus == 0) {
    if (box7 == -1) {
      console.log("check")
      writeMove(playerStatus, "#lower-left-corner");
      box7 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#lower-middle").click(function() {
  if (winnerStatus == 0) {
    if (box8 == -1) {
      console.log("check")
      writeMove(playerStatus, "#lower-middle");
      box8 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})
$("#lower-right-corner").click(function() {
  if (winnerStatus == 0) {
    if (box9 == -1) {
      console.log("check")
      writeMove(playerStatus, "#lower-right-corner");
      box9 = playerStatus;
      winCheck(playerStatus);
      computerMove()
      winCheck(computerStatus);
    }
  }
})

$("#playX").click(function() {
  if (playerStatus == 0) {
    playerStatus = 1;
    computerStatus = 0;
    clearBoard()
  }
})
$("#playO").click(function() {
  if (playerStatus == 1) {
    playerStatus = 0;
    computerStatus = 1;
    clearBoard()
  }
})
