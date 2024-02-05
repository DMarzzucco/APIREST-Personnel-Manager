import { useState } from 'react';
import './App.scss'

const imagePaths = [
    'img/eg1.jpg',
    'img/eg2.jpg',
];
console.log (imagePaths);
function App() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const changeImage = (index) => {
        setCurrentIndex(index);
    };

    const prevSlide = () => {
        const index = (currentIndex - 1 + imagePaths.length) % imagePaths.length;
        changeImage(index);
    };

    const nextSlide = () => {
        const index = (currentIndex + 1) % imagePaths.length;
        changeImage(index);
    };


    return (
        <main className="container">
            {/* header */}
            <header className="header">
                <a href="#" className="logo">
                    <i className="fa-solid fa-car"></i> <span>AutoMotris</span>
                </a>
                <nav className="menu">
                    <ul className="menu-list">
                        <li className="menu-list_item" style={{ display: 'inline-block' }}>
                            <a href="#">Home</a>
                        </li>
                        <li className="menu-list_item" style={{ display: 'inline-block' }}>
                            <a href="#">Features</a>
                        </li>
                        <li className="menu-list_item" style={{ display: 'inline-block' }}>
                            <a href="#">Price</a>
                        </li>
                        <li className="menu-list_item" style={{ display: 'inline-block' }}>
                            <a href="#">Contact</a>
                        </li>
                        <li className="menu-list_item" style={{ display: 'inline-block' }}>
                            <a href="#" className="book-apointment">Book Apointment</a>
                        </li>
                    </ul>
                </nav>
            </header>
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
            <footer className="footer">
                <section className="footer-widget">
                    <h3 className="footer_widget_title">Our Location</h3>
                    <p className="footer-widget_text">15 Street Suburb Country 6000</p>
                </section>
                <section className="footer-widget">
                    <h3 className="footer_widget_title">Phone</h3>
                    <p className="footer-widget_text">+54 9 3462 5689-58</p>
                </section>
                <section className="footer-widget">
                    <h3 className="footer_widget_title">Emial</h3>
                    <p className="footer-widget_text">drrkermazyxokv@gmail.com</p>
                </section>
            </footer>
        </main>


    );
};

export default App;