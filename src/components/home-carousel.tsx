import React from 'react';
import logoDesktop from '../assets/athos-1-desktop.png'
import athosDesktop from '../assets/athos-2-desktop.png'
import logoMobile from '../assets/athos-1-mobile.png'
import athosMobile from '../assets/athos-2-mobile.png'
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
    return (
        <div className="carousel-container">
            <Carousel id="desktopCarousel">
                <Carousel.Item>
                    <img src={logoDesktop} className="d-block w-100" alt="..."></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={athosDesktop} className="d-block w-100" alt="..."></img>
                </Carousel.Item>
            </Carousel>

            <Carousel id="mobileCarousel">
                <Carousel.Item>
                    <img src={logoMobile} className="d-block w-100" alt="..."></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={athosMobile} className="d-block w-100" alt="..."></img>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default HomeCarousel;