let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

input.addEventListener('change', () => {
   let files = input.files;
   const file = files[0];
   let reader = new FileReader();
   let totalScore = 0;

   const handValues = {
      rock: 1, // rock
      paper: 2, // paper
      scissors: 3  // scissors
   }
   const gameValues = {
      lose: 0,
      draw: 3,
      win: 6
   }
   const gameResult = {
      X: gameValues.lose,
      Y: gameValues.draw,
      Z: gameValues.win
   }

   reader.onload = (e) => {
      const file = e.target.result;
      const lines = file.split(/\r\n|\n/);
      for(i = 0; i < lines.length; i++) {
         totalScore += getScoreForGame(lines[i].charAt('0'), lines[i].charAt('2'));
      }
      textarea.value = totalScore;
      // totalScore = 11906, correct answer
   }

   getScoreForGame = (opponent, me) => {
      let points = 0;

      switch(opponent) {
         case 'A': // opponent rock
            switch(me) {
               case 'X': // lose, scissors
                  points += gameValues.lose;
                  points += handValues.scissors;
                  break;
               case 'Y': // draw, rock
                  points += gameValues.draw;
                  points += handValues.rock;
                  break;
               case 'Z': // win, paper
                  points += gameValues.win;
                  points += handValues.paper;
                  break;
               default:
                  textarea.value = 'something went wrong ' + points;
            }
            return points;
         case 'B': // opponent paper
            switch(me) {
               case 'X': // lose, rock
                  points += gameValues.lose;
                  points += handValues.rock;
                  break;
               case 'Y': // draw, paper
                  points += gameValues.draw;
                  points += handValues.paper;
                  break;
               case 'Z': // win, scissors
                  points += gameValues.win;
                  points += handValues.scissors;
                  break;
               default:
                  textarea.value = 'something went wrong ' + points;
            }
            return points;
         case 'C': //opponent scissors
            switch(me) {
               case 'X': // lose, paper
                  points += gameValues.lose;
                  points += handValues.paper;
                  break;
               case 'Y': // draw, scissors
                  points += gameValues.draw;
                  points += handValues.scissors;
                  break;
               case 'Z': // win, rock
                  points += gameValues.win;
                  points += handValues.rock;
                  break;
               default:
                  textarea.value = 'something went wrong ' + points;
            }
            return points;
         default:
            textarea.value = 'something went wrong ' + points;
      }
   }

   reader.readAsText(file);
});