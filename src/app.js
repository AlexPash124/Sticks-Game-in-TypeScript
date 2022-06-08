var Player = /** @class */ (function () {
    function Player() {
        this.playerNumber = 1;
        document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (this.playerNumber).toString();
    }
    Player.prototype.getPlayerNumber = function () {
        return this.playerNumber;
    };
    return Player;
}());
var Game = /** @class */ (function () {
    function Game() {
        this.player = new Player();
        this.sticks = new Sticks();
    }
    Game.prototype.start = function () {
        var _this = this;
        var button_1 = document.querySelector('#button_1');
        var button_2 = document.querySelector('#button_2');
        var button_3 = document.querySelector('#button_3');
        var button_bot_1 = document.querySelector('#button_bot_1');
        var button_bot_2 = document.querySelector('#button_bot_2');
        var button_bot_3 = document.querySelector('#button_bot_3');
        button_1.addEventListener('click', function () {
            console.log("button_1 click");
            if (_this.player.getPlayerNumber() == 1) {
                _this.sticks.changeSticks(_this.player.playerNumber, 1);
                _this.getWinner(_this.player.playerNumber);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 2;
        });
        button_2.addEventListener('click', function () {
            console.log("button_1 click");
            if (_this.player.getPlayerNumber() == 1) {
                _this.sticks.changeSticks(_this.player.playerNumber, 2);
                _this.getWinner(1);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 2;
        });
        button_3.addEventListener('click', function () {
            console.log("button_1 click");
            if (_this.player.getPlayerNumber() == 1) {
                _this.sticks.changeSticks(_this.player.playerNumber, 3);
                _this.getWinner(_this.player.playerNumber);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 2;
        });
        button_bot_1.addEventListener('click', function () {
            console.log("button_1 bot click");
            if (_this.player.getPlayerNumber() == 2) {
                _this.sticks.changeSticks(_this.player.playerNumber, 1);
                _this.getWinner(_this.player.playerNumber);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 1;
        });
        button_bot_2.addEventListener('click', function () {
            console.log("button_2 bot click");
            if (_this.player.getPlayerNumber() == 2) {
                _this.sticks.changeSticks(_this.player.playerNumber, 2);
                _this.getWinner(_this.player.playerNumber);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 1;
        });
        button_bot_3.addEventListener('click', function () {
            console.log("button_3 bot click");
            if (_this.player.getPlayerNumber() == 2) {
                _this.sticks.changeSticks(_this.player.playerNumber, 3);
                _this.getWinner(_this.player.playerNumber);
                console.log("this.player.playerNumber == 1");
            }
            _this.player.playerNumber = 1;
        });
    };
    Game.prototype.getWinner = function (player) {
        if (this.sticks.sticks.length < 1 && player === 1) {
            this.sticks.sticks = '||||||||||||||||||||';
            player = 1;
            document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks.sticks;
            document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player).toString();
            alert("Winner Player 2");
        }
        else if (this.sticks.sticks.length < 1 && player === 2) {
            this.sticks.sticks = '||||||||||||||||||||';
            player = 0;
            document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks.sticks;
            document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player).toString();
            alert("Winner Player 1");
        }
    };
    return Game;
}());
var Sticks = /** @class */ (function () {
    function Sticks() {
        this.sticks = '||||||||||||||||||||';
    }
    Sticks.prototype.changeSticks = function (player, n) {
        this.sticks = this.sticks.slice(0, this.sticks.length - n);
        console.log(this.sticks);
        console.log(this.sticks.length);
        document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks;
        if (player === 1) {
            document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player + 1).toString();
        }
        else {
            document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player - 1).toString();
        }
    };
    return Sticks;
}());
var game = new Game();
game.start();
