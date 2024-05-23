import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../SlideShow.css';
const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const plusSlides = (n) => {
    setCurrentSlide((prevSlide) => prevSlide + n);
  };
  const setCurrentSlideIndex = (n) => {
    setCurrentSlide(n);
  };
  return (
    <Row>
      <Col xs={12} sm={6} md={6} lg={6}>
        <p>What do our customers say? Don’t take our word for it! Here’s what our customers think</p>
      </Col>  
      <Col xs={12} sm={6} md={6} lg={6}>
        <div className="slideshow-container">
          <div className={currentSlide === 1 ? "mySlides fade" : "mySlides"} style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
            <div className="numbertext">1 / 3</div>
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f29387abb%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f29387abb%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" style={{ width: '100%' }} alt="Slide 1" />
            <div className="text">I'm soo happy shopping the body shop here, fast delivery and easy options for payment. Thank you
Sara</div>
          </div>
          <div className={currentSlide === 2 ? "mySlides fade" : "mySlides"} style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
            <div className="numbertext">2 / 3</div>
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f29387abc%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f29387abc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" style={{ width: '100%' }} alt="Slide 2" />
            <div className="text">I have been using the entire tea tree range of products.. It has helped me by reducing all the pi...
Tea Tree Face Wash | Anubha Bhasin</div>
          </div>

          <div className={currentSlide === 3 ? "mySlides fade" : "mySlides"} style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
            <div className="numbertext">3 / 3</div>
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_18f29387abc%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_18f29387abc%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" style={{ width: '100%' }} alt="Slide 3" />
            <div className="text">this product is amazing especially for summers. i have been using jars and jars of their yogurt r...
British Rose Body Yogurt | Paridhi</div>
          </div>
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <span className={currentSlide === 1 ? "dot active" : "dot"} onClick={() => setCurrentSlideIndex(1)}></span>
          <span className={currentSlide === 2 ? "dot active" : "dot"} onClick={() => setCurrentSlideIndex(2)}></span>
          <span className={currentSlide === 3 ? "dot active" : "dot"} onClick={() => setCurrentSlideIndex(3)}></span>
        </div>
      </Col>
    </Row>
  );
}
export default SlideShow;
