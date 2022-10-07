function sum(num1, num2) {
    return num1 + num2;
}
function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(function() {
    console.log(`Hola JavaScript`)
}, 5000);

function gretting(nombre){
    console.log(`Hola ${nombre}`);
}

setTimeout(gretting, 2000, `Oscar`)



function runCode(callback) {
    setTimeout(() => {
      console.log('Log after 2s')
      callback(4)
    },2000)
  }
  
  function time(tiempo) {
    setTimeout(() => {
      console.log(`Log after ${tiempo}s`)
    }, 2000)
  }
  
  runCode(time)