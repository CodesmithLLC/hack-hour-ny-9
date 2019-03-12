/*
9.4 Permute
have a results array
create dfs helper function that takes in the array, temparr
  if the array length is zero,
  push the temparray into results
  else
    for loop through the array
      choose nums[i]
      splice the array starting at i, with second argument (deleteCount) being 1  
      push nums[i] into array

      recursive call helper passing in the modified array and tempArr
      after it hits base case,
      unchoose the item by splicing the array, start at 1, deleteCount at zero, and add nums[i] as third parameter
      pop off temp arr
*/

/*
Compute subsets
have results array
have helper function that takes in
*/

/*
Letter combo of a phone
generate map of phone numbers to characters
helper dfs function that takes in the string, the tempstr, index (since its a combo)
  base case - if the index is equal to the digit length, push the tempstr into result and return
  choose - chars = map[digits[index]] - list of chars to loop over is the index of the digit passed in's values
  loop through the chars
    recursive call, passing in the digits, tempStr + char, and increment index
*/

/* 7.9 Roman to Int
create a map
initialize sum variable as the last element
back to front iteration
for loop starting at 2nd to last until i >= 0
  if the char at i is less than the one after it,
  subtract current char from sum
  otherwise add current char to sum

*/

/*
8.11
Find midpoint of linked list
slow starts at middle of linked list after doing tortois/hare
reverse the linked list while slow is true
loop through starting from head and prev as long as both are true and compare
*/
