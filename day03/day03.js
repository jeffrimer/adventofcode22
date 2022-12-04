let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
input.addEventListener('change', () => {
   let files = input.files;
   const file = files[0];
   let reader = new FileReader();

   reader.onload = (e) => {
      const file = e.target.result;
      const rucksacks = file.split(/\r\n|\n/);
      let commonItems = [];
      let prioritySum = 0;
      const priorityValue = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
         's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
         'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for(let i = 0; i < rucksacks.length; i++) {
         let compartment1 = rucksacks[i].substring(0, rucksacks[i].length/2);
         let compartment2 = rucksacks[i].substring(rucksacks[i].length/2);
         let arr1 = Array.from(compartment1);
         let arr2 = Array.from(compartment2);
         for(let j = 0; j < arr1.length; j++) {
            if(arr2.includes(arr1[j])) {
               commonItems.push(arr1[j]);
               break;
            }
         }
         console.log('commonItems: ', commonItems);
      }

      for(let k = 0; k < commonItems.length; k++) {
         prioritySum += (priorityValue.indexOf(commonItems[k]) + 1);
      }

      console.log(prioritySum);

      // answer: 7691

      textarea.value = JSON.stringify(commonItems);
   }
   reader.readAsText(file);
});