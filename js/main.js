/* if,else,if,else */

let a = 46;
let b = 10;
let c = 55;
let d = 21;

// if(a == 46 && b == 10 && c == 55 && d == 21){
//     console.log("Qiymatlarning hammasi to'g'ri")
// }
// else{
//     console.log("Qiymatlardan kamida bittasi noto'g'ri");
// }

//if(a == 46 && b == 10 && c == 55 && d == 21){
//     console.log("Qiymatlarning hammasi to'g'ri")
// }
// else{
//     console.log("Qiymatlardan kamida bittasi noyo'g'ri");
// }

/* JS types: undefined,boolean,object */

/* let soz; */
/* let rost = 45==45?true:false; */

// let arrayObject = [45,78,true,false,"matn","true","js",74]
// let oddiyObject = {ism: "Sarvara",familiya:"Odiljonova",yoshi:"18"}
//
// console.log(oddiyObject);




/* Function JS */



// if (savatcha.length == 0){
//     document.write("savatcha ichida " + savatcha.length + " dona ma'lumot bor");
// }
// else{
//     document.write("Savatcha ichida " + savatcha.length + " ta malumot bor")
// }
//
// function savatchaniTekshir(){
//     if (savatcha.length == 0){
//         document.write("savatcha ichida " + savatcha.length + " dona ma'lumot bor");
//     }
//     else{
//         document.write("Savatcha ichida " + savatcha.length + " ta malumot bor")
//     }
// }
// let savatcha = [12,"text"];
// savatchaniTekshir();



/* Date in JS */

let sana = new Date();

sana.setFullYear()
sana.setDate()


let yil = sana.getFullYear();
let oy = sana.getMonth();
let kun = sana.getDate();
let haftakuni = sana.getDay();
let soat = sana.getHours();
let milisecund = sana.getMilliseconds();
let minut = sana.getMinutes();
let timezoneOffset = sana.getTimezoneOffset();
let time = sana.getTime();
let g = sana.getUTCDate()
let f = sana.getUTCDay()
let d = sana.getUTCFullYear()
let s =sana.getUTCHours()
let k = sana.getUTCMilliseconds()
let milliseconds = sana.getUTCMilliseconds()
let u = sana.getUTCMinutes()
let t = sana.getVarDate()

let oylar = ["Yanvar","Fevral","Mart","Aprel","May","Iyun","Iyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"];


document.write("Bugun" +yil+ " - yil " + oylar[oy] + " oyining " + kun + " - kuni. Haftaning" + haftakuni + " - kuni");




























