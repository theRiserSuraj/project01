import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles.css';
const UncontrolledCarousel = () => {
  return (
      <div className="content">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2FDouble_the_fun_HPC_1.JPG&w=1920&q=75'
              alt='bodyshop'
            />
            <Carousel.Caption>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2FSummmer_beauty_hits_HPC_1.JPG&w=1920&q=75'
              alt='bodyshop'
            />
            <Carousel.Caption>          
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>          
      </div>
  );
};
export default UncontrolledCarousel;
