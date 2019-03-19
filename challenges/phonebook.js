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

function sortJaz(arr) {
  let keys = []
  for (let i = 0; i < jazbook.length; i++) {
    keys.push([jazbook[i][0]])
  }
  keys.sort()
  for (let i = 0; i < jazbook.length; i++) {
    for (let j = 0; j < keys.length; j++) {
      if (jazbook[i].indexOf(keys[j][0]) !== -1) {

        (keys[j]).push(jazbook[i][1])
      }
    }
  }
  return keys
}

function findName(jazbook, name) {
  let phonebook = sortJaz(jazbook)
  console.log(phonebook)

  let middle = Math.floor(phonebook.length / 2)
  console.log(middle)
  if (phonebook[middle][0] === name) {
    return phonebook[middle]
  } else {
    if
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
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

console.log(findName(jazbook, 'travis'))

module.exports = objectToExport;
