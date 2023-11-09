// /*----- CAMBIO COLORS -----*/
// const sizes = document.querySelectorAll('.size__tallas');
// const colors = document.querySelectorAll('.product__color');
// const product = document.querySelectorAll('.product__img');

// function changeSize(){
//     sizes.forEach(size => size.classList.remove('active'));
//     this.classList.add('active');
// }

// function changeColor(){
//     let primary = this.getAttribute('primary');
//     let color = this.getAttribute('color');
//     let productColor = document.querySelector(`.product__img[color="${color}"]`);

//     colors.forEach(c => c.classList.remove('active'));
//     this.classList.add('active');

//     document.documentElement.style.setProperty('--primary', primary);

//     product.forEach(s => s.classList.remove('shows'));
//     productColor.classList.add('shows')
// }

// sizes.forEach(size => size.addEventListener('click', changeSize));
// colors.forEach(c => c.addEventListener('click', changeColor));