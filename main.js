let pool = [];

//使用for loop 建立pool 1~49
for (let num = 1; num <= 49; num++) {
  pool.push(num);
}
console.log("Full Pool: ");
console.log(pool);

let index = 0;
let i =0;
let Interval;

console.log("Mark Six result:");

Interval = setInterval(() => {
    //隨機數字功能
    let index = Math.floor(Math.random() * pool.length);
    //使用randomNumber裝載隨機數字
    let randomNumber = pool[index];
    console.log(randomNumber);
    //移除隨機到的數字
    pool.splice(index, 1);
    i++;
    if (i === 6){
        console.log("Specical Number:");
    }
    if (i === 7) {
        clearInterval(Interval);
    }
    
}, 1000);

setTimeout(()=>{
    console.log("The remaining pool: ");
    console.log(pool);
}, 7500);