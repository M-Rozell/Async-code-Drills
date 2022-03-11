//Timing Out
//1.
// function message(string){
//     console.log(string)
// } 
//2.   
//message('message')
//3.
// setTimeout(() => {
//     message('message 2')
// }, 2000);
//4.
// function getWords(word){
//     setTimeout(() => {
//         console.log('1st');
//     })
//     setTimeout(() => {
//         console.log('2nd');
//     }, 3000)
//     setTimeout(() => {
//         console.log('3rd');
//     }, 5000)
//     setTimeout(() => {
//         console.log('4th');
//     }, 6000)
// }
// getWords()

//Callbacks and Recursion
//1.
function done() {
    console.log("Job's done!");
}//done();
//2.
// const countDown = (num, callback) => {
//     setTimeout(() => {

//         if (num > 0) {
//             console.log(num)
//             countDown(num - 1, callback)
//         } else {
//             callback();
//         }

//     }, 1000);
// }
// countDown(5, done);

//Promises Promises
//1.
let lunchTime = true;

//2.
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
        if (lunchTime === true) {
            let myLunch = {
                lunch: "Sandwitch",
                drink: "Water"
            }
            resolve(myLunch);
            
        } else {
            let err = new Error('Wrong!!');
            reject(err);
        }
        
    });
};

orderMeSomeFood()
.then((lunch) => {
    console.log(lunch);
}).catch((err) => {
    console.log(err);
});










