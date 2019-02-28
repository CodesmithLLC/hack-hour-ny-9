function countTwos(num) {
    let array = [];
    for ( let i = 1; i <= num; i++){
        let str = i.toString();
        for ( let i = 0; i < str.length; i++){
            if (i = '2'){
                array.push(i)
            }
        }
    }
    return array.length;
}

console.log(countTwos(1)); 
console.log(countTwos(3));  
console.log(countTwos(13)); 
console.log(countTwos(1000));  
console.log(countTwos(11420));