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
   this.obj = {}
  for ( let i = 0; i < jazbook.length; i++) {
    this.obj[jazbook[i][0]] = jazbook[i][1]
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
//=================================================raph================================================
function findName(jazbook, name) {
  ​
   // Step 1: Sort Jazbook
   // what's the time complexity of Array.prototype.sort?
   // the JavaScript sort method's underlying algorithm varies
   // based on browser, and even the nature of the array!
   // so time complexity varies
   jazbook.sort((a, b) => {
    let aFirstChar = a[0][0].toLowerCase();
    let bFirstChar = b[0][0].toLowerCase();
    // The sort method's callback must return a number. If the returned number is:
    // less than 0, a will be sorted at a lower index than b
    // 0, element postions will be unchanged
    // greater than 0, b will be sorted at a lower index than a
    return aFirstChar < bFirstChar ? -1 : 1;
    return 0;
   });
  ​
   // Step 2: use binarySearch to find value O(log n)
   // this uses tail call recursion (credit to Ryan!)
   function binarySearch(array, value, left = 0, right = array.length - 1){
    
    // Only calculate midpoint if your left index is less than right index
    if (left < right){
     const midpoint = Math.floor(( left + right ) / 2);
  ​
     // if the element at the midpoint matches the value we're looking for, return early
     if (array[midpoint][0] === value) return array[midpoint][1];
        
     // else, compare the element at the midpoint with our search value:
     //  if the midpoint value is less than our search value:
     //   - set left to midpoint (continue search in upper half of array)
     //  if the midpoint value is greater than our search value:
     //   - set right to midpoint (continue search in lower half of array)
     return (array[midpoint][0].toLowerCase() < value[0].toLowerCase())
      ? binarySearch(array, value, midpoint + 1, right)
      : binarySearch(array, value, left, midpoint - 1)
    }
  ​
    // when left === right, we've narrowed our search to one element
    // return it's value if it matches, or return false (value not found)
    return array[left][0] === value ? array[left][1] : false;
   }
  ​
   return binarySearch(jazbook, name);
  }
  ​
  // return an object literal representing the jazbook
  function makePhoneBookObject(jazbook){
   let phoneBook = {};
  ​
   // loop over jazbook and add to object
   for (let entry of jazbook) {
    phoneBook[entry[0]] = entry[1];
   }
  ​
   // we can't use an arrow function here: why?
   phoneBook.add = function(name, number) {
    this[name] = number;
   }
  ​
   phoneBook.remove = function(name) {
    delete this[name];
   }
  ​
   return phoneBook;
  ​
  }