// h1 { color: red }
// .parrafito { ... }
// #pid { ... }


const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('parrafito');
// Si se usa el querySelector, no se debe usar el . al inicio del elemento
// const parrafito=document.querySelector('.parrafito');
const pid=document.getElementById('pid');
// Si se usa el querySelector, no se debe usar el # al inicio del elemento
// const pid=document.querySelector('#pid');
const input=document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});
h1.innerHTML = 'Patito <br> Feo';
// lo toma como cod html

h1.innerText = 'Patito <br> Feo';
// lo toma como text

console.log(h1.getAttribute('pantalla'));
console.log(h1.getAttribute('class'));

// h1.setAttribute('class', 'rojo');
// para cambiar el valor de un atributo

// h1.classList.add('rojo');
// agregar un valor a ese atributo

// h1.classList.remove('verde');
// quitar un valor a ese atributo

// h1.classList.toggle('verde');
// h1.classList.contains('verde')

// console.log(h1.getAttribute('class'));
// conseguir el valor de ese atributo

input.value = '456';

// document.createElement('img');
// Crea un elemento

const img = document.createElement('img');
img.setAttribute(
    'src', 
    'https://i.idol.st/u/card/art/729UR-Mia-Taylor-You-ll-Sing-My-Song-Marriage-Proposition-nNvtaw.png'
);
console.log(img);

pid.innerHTML = '';
// Para borrar un elemento
pid.append(img);
// se usa para agregar un atributo a un elemento, tmb se puede appendChild

