//defenir imganes 
const image =[
    'img/imag-1.jpg',
    'img/imag-2.jpg'
]
// estado
let index =0;
const max=image.length;
//interactuacion
const containerElement =document.querySelector('.container');
const prevslideButton = document.querySelector('.prevSlide');
const nextSlideButton= document.querySelector('.nextSlide');
// listen arrow click events
prevslideButton.addEventListener('click', function(){
    index--;
    setImageIndex();
    changeImage(image[index], containerElement);    
})
nextSlideButton.addEventListener('click', function(){
    index++;
    setImageIndex();
    changeImage(image[index], containerElement);    
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