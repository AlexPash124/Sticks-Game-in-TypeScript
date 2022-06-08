class Player {
  playerNumber: number = 1;
  constructor() {
     document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (this.playerNumber).toString();
  }
  getPlayerNumber(){
      return this.playerNumber;
  }

}

class Game {
  player = new Player();
  sticks = new Sticks();

  start() {
      let button_1 = document.querySelector('#button_1');
      let button_2 = document.querySelector('#button_2');
      let button_3 = document.querySelector('#button_3');


      let button_bot_1 = document.querySelector('#button_bot_1');
      let button_bot_2 = document.querySelector('#button_bot_2');
      let button_bot_3 = document.querySelector('#button_bot_3');
      button_1.addEventListener('click', () => {
          console.log("button_1 click");
          if (this.player.getPlayerNumber() == 1) {
              this.sticks.changeSticks(this.player.playerNumber,1);
              this.getWinner(this.player.playerNumber);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 2;
      });

      button_2.addEventListener('click', () => {
          console.log("button_1 click");
          if (this.player.getPlayerNumber() == 1) {
              this.sticks.changeSticks(this.player.playerNumber,2);
              this.getWinner(1);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 2;
      });

      button_3.addEventListener('click', () => {
          console.log("button_1 click");
          if (this.player.getPlayerNumber() == 1) {
              this.sticks.changeSticks(this.player.playerNumber,3);
              this.getWinner(this.player.playerNumber);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 2;
      });


      button_bot_1.addEventListener('click', ()=>{
          console.log("button_1 bot click");
          if (this.player.getPlayerNumber() == 2) {
              this.sticks.changeSticks(this.player.playerNumber,1);
              this.getWinner(this.player.playerNumber);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 1;
      });
      button_bot_2.addEventListener('click', ()=> {
          console.log("button_2 bot click");
          if (this.player.getPlayerNumber() == 2) {
              this.sticks.changeSticks(this.player.playerNumber,2);
              this.getWinner(this.player.playerNumber);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 1;
      });
      button_bot_3.addEventListener('click', ()=> {
          console.log("button_3 bot click");
          if (this.player.getPlayerNumber() == 2) {
              this.sticks.changeSticks(this.player.playerNumber,3);
              this.getWinner(this.player.playerNumber);
              console.log("this.player.playerNumber == 1");
          }
          this.player.playerNumber = 1;
      });
  }

  getWinner(player: number) {
      if (this.sticks.sticks.length < 1 && player === 1) {
          
          this.sticks.sticks = '||||||||||||||||||||';
          player = 1;
          document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks.sticks;
          document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player).toString();
          alert("Winner Player 2");
      } else if (this.sticks.sticks.length < 1 && player === 2) {
          
          this.sticks.sticks = '||||||||||||||||||||';
          player = 0;
          document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks.sticks;
          document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player).toString();
          alert("Winner Player 1");
      }
  }
}

class Sticks {
  sticks: string = '||||||||||||||||||||';

  changeSticks(player: number, n: number) {
      this.sticks = this.sticks.slice(0, this.sticks.length - n);
      console.log(this.sticks);
      console.log(this.sticks.length);
      document.getElementById('PlaceHoneySawdust').innerHTML = this.sticks;
      if(player===1){
        document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player+1).toString();
      }
      else{
        document.getElementById('playerNumber').innerHTML = 'Ходить гравець №' + (player-1).toString();
      }
    
  }
}

const game = new Game();
game.start();