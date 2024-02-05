import { useState } from 'react';
import './App.scss'
import Footer from './components/footer';
import Head from './components/Header';

const imagePaths = [
    'img/eg1.jpg',
    'img/eg2.jpg',
];
function App() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (index) => {
        setCurrentIndex(index);
        const containerElement = document.querySelector('.container');
        // cambiar background<->iterar con la hoja de estilos. 
        containerElement.style.backgroundImage = `url(${imagePaths[index]})`;
        // Cambiar color de fuente basado en el índice
        const contentMarkElement = document.querySelector('.contentMark');
        const textColor = index === 1 ? 'black' : 'white';
        contentMarkElement.style.color = textColor;
        // enlacesColor
        const menuLinks = document.querySelectorAll('.menu-list_item a');
        const linkColor = index === 1 ? 'black' : 'white';
        menuLinks.forEach(link => {
            link.style.color = linkColor;
        });
        // logoColor
        const logoLink = document.querySelector('.logo');
        logoLink.style.color = linkColor;
        // slideButtonsColor
        const slideButtons = document.querySelectorAll('.slideButton');
        slideButtons.forEach(button => {
            button.style.color = linkColor;
        });
    };
    // boton previo
    const prevSlide = () => {
        const index = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
        changeImage(index);
    };
    // boton previo

    const nextSlide = () => {
        const index = (currentIndex + 1) % imagePaths.length;
        changeImage(index);
    };


    return (
        <main className="container">
            {/* header */}
            <Head/>
            {/* article */}
            <article className="content">
                <a className="slideButton prevSlide" onClick={prevSlide}><i className="fa-solid fa-chevron-left"></i></a>
                <a className="slideButton nextSlide" onClick={nextSlide}><i className="fa-solid fa-chevron-right"></i></a>
                <div className="contentMark">
                    <h1 className="content_clain">Your Car Repairs</h1>
                    <h2 className="content_subclain">Visit us for your service</h2>
                    <a href="#" className="book-apointment">Book Apointment</a>
                </div>
            </article>
            {/* footer */}
            <Footer/>
        </main>


    );
};

export default App;