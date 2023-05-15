function calculate(...args){
    let sum = 0
    for(const num of args){
        sum += num
    }
    return sum
}

console.log(calculate(5, 7, 8, 15))


// const user = {
//     banks: 'BOG',
//     adress: 'chavchavadze street',
//     sity: 'rustavi',
// }



// const {sity, adress, banks, appartments} = user

// console.log(sity, appartments)





// const user1 = {
//     name: 'alex',
//     lasName: 'barbakadze',
//     age: 39,
//     address: {
//         country: 'georgia'
//     }
// }


// const user2 = {
//     ...user1,
//     address: {
//         ...user1.address
//     }
     
// }


// user2.name = 'david'
// user2.address = 'Italy'

// console.log(user2.name, user1.lasName)

// console.log(user2.address, user1.age)