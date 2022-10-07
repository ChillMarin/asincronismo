const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true) //se usó operador ternario y se está forzando con true que se cumpla la condición
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Error!')); //arroja "error" en caso de que la condición sea false
    });
}

const anotherFn = async () => { //la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync(); //aquí nos está regresando una promesa
    console.log(something); //se imprime mientras se espera
    console.log('Hello!');
}

console.log('Before'); //al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After'); //aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/














/*🔁 ¿Qué es una función asíncrona?
.
La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.
Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.
.
🔏 La estructura se compone por las palabras reservadas async y await:
.

La palabra async antes de la función, hace que la función devuelva una promesa.
La palabra await se utiliza dentro de las funciones async, lo que hace que el programa espere hasta que la variable(promesa) se resuelva para continuar.
.
✏️ Ejemplo con código:
.

Ir a VSC, crear dentro de la carpeta src una carpeta llamada async.
En la ruta src/async crear el archivo index.js
Dentro del archivo index.js, se crea la promesa y luego se valida si la promesa se resolverá, también se hace el llamado de la misma y luego se busca mostrar como se desenvuelve con await. En el ejemplo se usa el if ternario.
.

🚥 ¿Qué es un operador if ternario?
.
El operador ternario consta de 3 partes: condición ? expresión1 : expresión2;

La primera es la lógica, se evalúa una condición.
La segunda parte está después del signo de cierre de interrogación ?, ésta se ejecuta solo si la condición es verdadera true.
La tercera parte está después del símbolo de dos puntos :, ésta se ejecuta solo si la condición resulta falsa false.
Fuente: aquí
Ejemplo:

var a = 5;
var b = 3;
var c = a > b ? "Es mayor" : "Es menor";
//Si la condición después del símbolo igual (=) se cumple, entonces se tendrá el valor: “Es mayor”, de lo contrario tomará el valor: “Es menor”.
*/