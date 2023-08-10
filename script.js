//defenir imganes 
const image =[
    'imag 1.jpg',
    'imag 2.jpg'
]
// estado
let indice =0;
const max=image.length;
//interactuacion
const containerElement =document.querySelector('.container');
const prevslideButton = document.querySelector('.prevSlide');
const nextSlideButton= document.querySelector('.nextSlide');
// listen arrow click events
prevslideButton.addEventListener('click', function(){
    index--;
    setImageIndex();
    changeImage(images[index], containerElement);    
})
nextSlideButton.addEventListener('click', function(){
    index++;
    setImageIndex();
    changeImage(images[index], containerElement);    
})

function setImageIndex(){
    if (index < 0){
        index = max-1;
    }
    if (index === max){
        index = 0;
    }
}

function changeImage(backgroundImage, element){
    element.style.backgroundImage = `url(${backgroundImage})`;

}
