let input = document.querySelector('input');
let textarea = document.querySelector('textarea');

input.addEventListener('change', () => {
   let files = input.files;
   const file = files[0];
   let reader = new FileReader();
   let totalScore = 0;

   const handValues = {
      X: 1, // rock
      Y: 2, // paper
      Z: 3  // scissors
   }
   const gameValues = {
      lose: 0,
      draw: 3,
      win: 6
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
               case 'X': // rock - draw
                  points += gameValues.draw;
                  points += handValues.X;
                  break;
               case 'Y': // paper - win
                  points += gameValues.win;
                  points += handValues.Y;
                  break;
               case 'Z': // scissors - lose
                  points += gameValues.lose;
                  points += handValues.Z;
                  break;
               default:
                  textarea.value = 'something went wrong ' + points;
            }
            return points;
         case 'B': // opponent paper
            switch(me) {
               case 'X': // rock - lose
                  points += gameValues.lose;
                  points += handValues.X;
                  break;
               case 'Y': // paper - draw
                  points += gameValues.draw;
                  points += handValues.Y;
                  break;
               case 'Z': // scissors - win
                  points += gameValues.win;
                  points += handValues.Z;
                  break;
               default:
                  textarea.value = 'something went wrong ' + points;
            }
            return points;
         case 'C': //opponent scissors
            switch(me) {
               case 'X': // rock - win
                  points += gameValues.win;
                  points += handValues.X;
                  break;
               case 'Y': // paper - lose
                  points += gameValues.lose;
                  points += handValues.Y;
                  break;
               case 'Z': // scissors - draw
                  points += gameValues.draw;
                  points += handValues.Z;
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