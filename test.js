      //#1

// const user = [
//     {name: 'temo',
//     age: 25},

//     {name: 'lasha',
//     age: 21},

//     {name: 'ana',
//     age: 28}
    
// ]

// console.log(user [1])


            //#2


// const user = {
//     firstname: 'Alex',
//     lastname: 'Barbakadze',
//     age: 39,
//     new: function(){
//         console.log('new function')
//     }
   
// }

// console.log(user.firstname, user.lastname, user.age)
// user.new()


            //#3


 
    
    function Alex(){
        return parseInt(Math.random() * 10) + 1
    }
    
    let result1 = Alex()
    
    while(result1 !==3){
        result1 = Alex()
        console.log(result1 + ' ' + 'Alex')
    }


    function David(){
        return parseInt(Math.random() * 10) + 1
    }
    
    let result2 = David()
    
    while(result2 !==3){
        result2 = David()
        console.log(result2 + ' ' + 'David')
    }

    
    
