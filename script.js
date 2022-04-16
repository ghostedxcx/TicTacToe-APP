

// object to control the flow of the game
var gameFlow = {
}

// use a module to create a gameboard as an array inside of an object
var moduleBoard = (function() {
    var game = {
        board: []
    }

    return({ game });

})();

// create a factory function to store players inside of object
function playerFactory(name,) {
    var player = {
        name: name,
    }
    var player2 = {
        name: name,
    }
    return player, player2;
}

console.log(moduleBoard.game.board);
console.log(playerFactory('player1'));
