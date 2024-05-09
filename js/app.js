const pictures = [
  "https://cdn2.thecatapi.com/images/1bn.png",
  "https://cdn2.thecatapi.com/images/eds.jpg",
  "https://cdn2.thecatapi.com/images/c38.jpg",
  "https://cdn2.thecatapi.com/images/53h.jpg",
  "https://cdn2.thecatapi.com/images/9hl.jpg"
];

/**
 * ¿Qué variable de estado vamos a necesitar?

 * ¿Cómo se establece la imagen de fondo de un elemento mediante un estilo en línea?
 */

let index = 0;

// TODO: Seleccionar la foto del array y ponerla como imagen de fondo del contenedor del slider
let container = document.querySelector('.img-container');
updateSlider();
function updateSlider(){
container.style.backgroundImage = `url(${pictures[index]})`;
console.log(pictures.length);
}

document.querySelector('.btn-right').addEventListener('click', () =>{
  index++;
  console.log(index);
  if(index == pictures.length){
    index = 0
  }
  updateSlider();
  
});

document.querySelector('.btn-left').addEventListener('click', () =>{
  index--; 
  console.log(index);
  if(index == -1){
    index = pictures.length -1;
  }
  updateSlider();

})