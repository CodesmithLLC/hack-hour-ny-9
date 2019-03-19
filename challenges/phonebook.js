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

class PhoneBook {
  constructor() {
    this.book = {};
  }
  add(name, phone) {
    this.book[name] = phone;
    return this;
  };
  lookUp(name) {
    return this.book[name] ? this.book[name] : false;
  }
  remove(name) {
    const tempRecord = this.book[name];
    if (tempRecord) {
      delete this.book[name];
      return tempRecord;
    }
    return false;
  }
} 

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  if (!Array.isArray(jazbook)) return false;
  for (let i = 0; i < jazbook.length; i++) {
    if (jazbook[i][0] === name) return jazbook[i][1]
  }
  return false;
}

// return an object literal representing the jazbook
function makePhoneBookObject(jazbook){
  return jazbook.reduce((book, record) => {
    book[record[0]] = record[1];
    return book;
  }, {})
}

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
