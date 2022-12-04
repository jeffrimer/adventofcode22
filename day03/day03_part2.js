let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
input.addEventListener('change', () => {
   let files = input.files;
   const file = files[0];
   let reader = new FileReader();

   reader.onload = (e) => {
      const file = e.target.result;
      const rucksacks = file.split(/\r\n|\n/);
      let commonBadge = [];
      let prioritySum = 0;
      let groupNumber = 0;
      const priorityValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
         's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
         'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for(let i = 0; i < rucksacks.length/3; i++) {
         let arr1 = Array.from(rucksacks[groupNumber]);
         let arr2 = Array.from(rucksacks[groupNumber+1]);
         let arr3 = Array.from(rucksacks[groupNumber+2]);
         console.log(arr1, arr2, arr3);
         for(let j = 0; j < arr1.length; j++) {
            if(arr2.includes(arr1[j])) {
               if(arr3.includes(arr1[j])) {
                  groupNumber += 3;
                  commonBadge.push(arr1[j]);
                  break;
               }
            }
         }
         console.log('commonBadge: ', commonBadge);
      }

      for(let k = 0; k < commonBadge.length; k++) {
         prioritySum += (priorityValue.indexOf(commonBadge[k]) + 1);
      }

      console.log(prioritySum);

      // answer: 2508

      textarea.value = JSON.stringify(commonBadge);
   }
   reader.readAsText(file);
});