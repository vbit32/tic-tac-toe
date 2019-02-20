$(document).ready(function(){
    var playershahafunnyepicgamermoment = [
        "<span id ='player-1'>X</span></span>", 
        "<span id ='player-2'>O</span></span>"
    ];
    var playershahafunnyepicgamermomentmoves = [{}, {}];
    var turn = 0;
    var winMoves = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    $("li").on("click", function(event){
            var gameBoyadvance = "#"+event.target.id;
            if( !$(this).hasClass('filled')) {
                $(gameBoyadvance).append(playershahafunnyepicgamermoment [turn]);
                playershahafunnyepicgamermomentmoves[turn][( $(this).attr('data-pos'))] = true ;
                $(this).addClass('filled');
            }
            checkWins(playershahafunnyepicgamermomentmoves [turn]);
            updateTurn();
        });

    function updateTurn() {
        turn = turn == 1 ? 0 : 1;
        // you could also use:
        // turn = 1 - turn;
    }

    function checkWins(currentMoves) {
        for(wm = 0; wm < winMoves.length; ++wm) {
            var winMove = winMoves[wm];
            var matches = 0;
            for (var current = 0 ; current < winMove.length ; ++ current){
                if(currentMoves["" + winMove[current]] !== undefined){
                    if (++matches == 3) {
                        alertWin();
                        return;
                    }
                }
                else {
                    // check next winning moves
                    break;
                }
            }
        }
    }

    //you only call this function to alert when the current player has won

    function alertWin() {
        $("li").off("click");
        setTimeout(function() {alert("player "+ (turn + 1) +", you win!!!!");}, 1);
    }
});
