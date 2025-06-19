
let p = new Promise((resolve,reject)=>{
    let a = 1+2;
    if (a==2) {
        resolve('Success')
    }else{
        reject('Failed')
    }
})



p.then((message) => {
    console.log('this the message' + message)

}).catch((message) => {
    console.log('this is the message' + message)

})


// Implementing a basic promise that reesolves with "Hello World" using .then

let p1 = new Promise((resolve,reject) => {
    setTimeout(() => resolve('Hello World'),2000)
})

p1.then((message) =>{
    console.log(message)
})


//Implementing a promise that rejects after 1 1 second with an error message

let p2 = new Promise((resolve,reject) => {
    setTimeout(() => reject('Error: Promise rejected.'),1000)
})

p2.catch((message) =>{
    console.log(message)
})

// Implementing a function to check the modulairty of a number using promises

function checkNumber(num){
    let p3 = new Promise((resolve,reject) =>{
        if (num%2 ===0){
            resolve('Number is even')
        } else{
            reject('Number is odd')
        }
    })

    p3.then((message) =>{
        console.log(message);
    }).catch((message) => {
        console.log(message)
    })

}


console.log(checkNumber(9))


// Chaining Promises
let p4 = new Promise((resolve,reject) =>{
    resolve(3)
})

p4.then((message) =>{
    return message
}).then((result) =>{
    return result*2;
}).then((result)=>{
    console.log(result+10)
})


////Fake APi call

let data = 'front-end internship day 4';
function fakeFetch(data){
    let p5 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(data)
        }, 2000);
})
    p5.then((message) =>{
    console.log(message);
})
}

fakeFetch(data);

