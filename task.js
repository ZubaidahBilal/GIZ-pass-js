
/* Bubble sort algorithm: ACS & DESC */

/*
1. Try to figure out the issue of the sorting algorithm, and fix it to work as expected. 
2. Change the code to be well-designed and well-styled.
*/

//swap function that could be used within the ascending & descending functions.
function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}


//reusable ascending function.
function AscSort(numbers){
    var len = numbers.length ,
    i, j,
    isSwapped = false;
      
    for(i = 0; i < len; i++){
      isSwapped = false;
        
      for(j = 0; j < len; j++)
      {
        if(numbers[j] > numbers[j + 1])
        {
          swap(numbers, j, j+1)
          isSwapped = true;
        }
      }

    //to optimize the algorithm, enhance complexities
    // IF no two elements were swapped by inner loop, then break 
        
      if(!isSwapped){
        break;
      }
    }
      
    // Print the array
    return numbers
}


//reusable descending function.
function DescSort(numbers){
    var len = numbers.length ,
      i, j,
      isSwapped = false;

    for(i = 0; i < len; i++){
    isSwapped = false;

    for(j = 0; j < len; j++)
    {
        if(numbers[j] < numbers[j + 1])
        {
            swap(numbers, j, j+1)
            isSwapped = true;
        }
    }
    //to optimize the algorithm, enhance complexities
    // IF no two elements were swapped by inner loop, then break 
        
      if(!isSwapped){
        break;
      }
}
      
    // Print the array
    return numbers
}




/* excute and print the list that be sorted*/
let numbers = [ 5, 8, 0, 1, 9, 11, 15, 16 ];
console.log("Original numbers list: ", numbers)

/* immutable array of `numbers`, and print the new one. */
const copyNumber = [...numbers];
const immutableNumbers = Object.freeze(copyNumber);
console.log("Immutable Numbers list: ", immutableNumbers);

// Asc Sorting
ascSorting = AscSort(numbers)
console.log("Numbers list After sorting: ", ascSorting)

//Desc Sorting
descSorting = DescSort(numbers)
console.log("Numbers list After Desc sorting: ", descSorting)




/* Read the numbers list from data.txt file, sort it in ASC order, then store it in a new file called output.txt */

//include the File System module | Node.js
const fs = require('fs')

//read list, split with comma, sort it ascendingly and save it in output.txt
try 
{
  const data = fs.readFileSync('data.txt', 'utf8').split(',');
  fs.writeFileSync('output.txt', AscSort(data).toString());
  //print the sorting list that be will saved in output.txt
  console.log("numbers list from data.txt file After sorting: ",data) 
} 
catch (err) 
{
  console.error(err)
}

