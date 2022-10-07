import fetch from 'node-fetch';
//const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){
    return fetch(urlApi);
};
//el llamado
fetchData(`${API}/products`)
    .then(response => response.json())
    // ahora products que puede ser tmb cualuiqer variblae lo que hace es que se almacena la info ahi en products y se muestra en consola
    .then(products => {
        console.log(products);
    })
    .then(() => {
        console.log('hola');
    }) //se pueden anidar múltiples .then
    .catch(error => console.log(error));





    //ejemplo 2
function fetchData(urlApi){
    return fetch(urlApi);
};
/* OJO
function fetchData(urlApi){
    return fetch(urlApi).then(response => response.json()); de esta manera no hay que colocar responde.json en todos los llamados
};
*/
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

    fetchData(`${API}/products`)
    .then(response => response.json()) //se hace la conversión a un objeto json
    .then(products => {
        console.log(products); //se muestran todos los productos
        return fetchData(`${API}/products/${products[0].id}`) // solo se quiere mostrar el primer elemento de la primera solicitud
    })
    .then(response => response.json()) //se vuelve traer la data
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) //se quiere mostrar la categoria de un producto en particular
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err)) //detectar un error
    .finally(() => console.log('Finally')); //es opcional para mostrar que se terminó la solicitud
