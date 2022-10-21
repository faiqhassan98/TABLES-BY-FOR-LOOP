//METHOD 1
//  function TableLoop(number){
//     for(let i = 1; i <=10; i++){
//         const output = number * i;
//         console.log(`${number} * ${i} = ${output}`);
//     }
    
// }
// const number = prompt('Enter a number');
// const result = TableLoop(number);



 //METHOD 2
function Tables(number){
    for (let j = 1; j <= 10; j++){
        var result = number * j;
        console.log(result);
    }
}
console.log(Tables(prompt('Enter a number')));
