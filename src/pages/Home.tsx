import '../App.scss'
import { Link } from 'react-router-dom';
import { useAuth } from '../context/context';
import { BtnImage } from '../components/assets/assetst';

function Home() {
    const { Slide } = useAuth()
    return (
        <main className="container">
            <article className="content">
                <BtnImage
                    click={() => Slide('next')}
                    className='slideButton prevSlide'>
                    <i className="fa-solid fa-chevron-left"></i>
                </BtnImage>
                <BtnImage
                    click={() => Slide('prev')}
                    className='slideButton nextSlide'>
                    <i className="fa-solid fa-chevron-right"></i>
                </BtnImage>
                <div className="contentMark">
                    <div className='contHeader'>
                        <h1 className="content_clain">Your Car Repairs</h1>
                        <h2 className="content_subclain">Visit us for your service</h2>
                    </div>
                    <Link to={'/messages'} className="book-apointment">Book Apointment</Link>
                </div>
            </article>
        </main>
    )
}
export default Home;
