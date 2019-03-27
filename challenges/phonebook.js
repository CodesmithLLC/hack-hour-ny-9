/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505']
*     ['jasmine','1800-974-4539'],
*   ];
*
* jazbooks are not always sorted...
*
* Develop a function that takes in a jazbook and a name, searches through the jazbook and
* returns the persons phone number. If the person does not exists, return false.
*
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/


let jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];
//  return the number associated with the name in the jazbook



function findName(jazbook, name) {
  jazbook.sort((a, b) => {
    let aFirstChar = a[0][0].toLowerCase();
    let bFirstChar = b[0][0].toLowerCase();

    return aFirstChar < bFirstChar ? -1 : 1;
    return 0
  })

  function binarySearch(array, value, left = 0, right = array.length - 1) {
    if (left < right) {
      let middle = Math.floor((left + right) / 2)
      if (array[middle][0] === value) return array[middle][1]
    }

    console.log(middle)
  }


}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook) {
  let output = {}
  for (let i = 0; i < jazbook.lenght; i++) {
    if (output[jazbook[i][0] === undefined]) {
      output[jazbook[i][0]] = new Array();
      output[jazbook[i][0]].push(jazbook[i][1])
    } else {
      (output[jazbook[i][0]]).push(output[jazbook[i][1]])
    }
  }
  console.log(output)
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

console.log(findName(jazbook, 'travis'))

module.exports = objectToExport;
