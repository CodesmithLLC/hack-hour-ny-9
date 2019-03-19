/**
* Part 1:
* You are given an array of arrays.  The subarrays are first names and phone numbers.
*
* Example:
*   jazbook = [
*     ['alex','301-844-3421'],
*     ['jae','301-844-1211'],
*     ['david','301-844-0978'],
*     ['travis','301-844-8505'],
*     ['jasmine','1800-974-4539']
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

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  let array = jazbook.toString().split(',');
  for ( let i = 0; i < array.length; i+=2) {
    if (array[i] === name) {
      return array[i+1]
    }
  }
  return false
}
console.log(findName([['gaber','2016820281'], ['victor','23435656546'],['kia','325425']], 'brandon'))

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  let obj = {}
  for ( let i = 0; i < jazbook.length; i++) {
    obj[jazbook[i][0]] = jazbook[i][1]
  }
}

makePhoneBookObject.prototype.add = function (name, number) {
  this.obj[name] = number
}

makePhoneBookObject.prototype.lookup = function (name) {
  return this.obj[name]
}

makePhoneBookObject.prototype.remove = function (name) {
  delete this.obj[name]
}




const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
