//funcion que selecciona los elementos
const selectElement = (s) => document.querySelector(s);
//abrir el menu cuando hacemos click
selectElement(s:'.abrir').addEventListener('click' , () => {
	selectElement(s: '.nav-lista').classList.add('activa');
});

//cerrar el menu cuando hacemos click
selectElement(s:'.cerrar').addEventListener('click' , () => {
	selectElement(s: '.nav-lista').classList.remove(tokens:'activa');
});