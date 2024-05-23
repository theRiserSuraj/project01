import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import Footer from './Footer';
import SlideShow from './SlideShow';
const BodyContent = () => {
  return (
    <div className='container'>
      <h1>Recommended For You</h1>
      <div className='row-scroll'>
        <Row className='justify-content-center flex-nowrap'>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/catalog/product/o/l/olive_shower_gel_250ml_1_inabcps073.jpg' />
              <Card.Body>
                <Card.Title>Olive Shower Gel</Card.Title>
                <Card.Img className='icon' variant='top' src='https://cdn-icons-png.flaticon.com/128/156/156855.png'></Card.Img>
                <Card.Text>
                  All skin types cleanse and refresh. Vegan.
                  Buy 2 get 1 free. Add Minimum 3 to cart.
                  250ml.
                  ₹495
                </Card.Text>
                <Button>Add to Bag</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/catalog/product/1/0/1097528_shower_gel_strawberry_250ml_brnz_nw_inabcps067_-_copy.jpg' />
              <Card.Body>
                <Card.Title>Strawberry Shower Gel</Card.Title>
                <Card.Img className='icon' variant='top' src='https://cdn-icons-png.flaticon.com/128/156/156855.png'></Card.Img>
                <Card.Text>
                  All skin types cleanse and refresh. Vegan.
                  Buy 2 get 1 free. Add Minimum 3 to cart.
                  250ml.
                  ₹495
                </Card.Text>
                <Button>Add to Bag</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/catalog/product/a/r/argan_body_lotion_1097355_1800x1800_1_.jpg' />
              <Card.Body>
                <Card.Title>Argan Body Lotion</Card.Title>
                <Card.Img className='icon' variant='top' src='https://cdn-icons-png.flaticon.com/128/156/156855.png'></Card.Img>
                <Card.Text>
                  All skin types cleanse and refresh. Vegan.
                  Buy 2 get 1 free. Add Minimum 3 to cart.
                  250ml.
                  ₹495
                </Card.Text>
                <Button>Add to Bag</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/catalog/product/1/0/1097521_shower_gel_british_rose_250ml_brnz_nw_inabcps069.jpg' />
              <Card.Body>
                <Card.Title>British Rose Shower Gel</Card.Title>
                <Card.Img className='icon' variant='top' src='https://cdn-icons-png.flaticon.com/128/156/156855.png'></Card.Img>
                <Card.Text>
                  All skin types cleanse and refresh. Vegan.
                  Buy 2 get 1 free. Add Minimum 3 to cart.
                  250ml.
                  ₹495
                </Card.Text>
                <Button>Add to Bag</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/catalog/product/1/0/1096993_shower_scrub_strawberry_200ml_a0x_brnz_nw_inaaups441.jpg' />
              <Card.Body>
                <Card.Title>Strawberry Shower Scrub</Card.Title>
                <Card.Img className='icon' variant='top' src='https://cdn-icons-png.flaticon.com/128/156/156855.png'></Card.Img>
                <Card.Text>
                  All skin types cleanse and refresh. Vegan.
                  Buy 2 get 1 free. Add Minimum 3 to cart.
                  250ml.
                  ₹495
                </Card.Text>
                <Button>Add to Bag</Button>
              </Card.Body>
            </Card>
          </Col>         
        </Row>
      </div>
      <div className='products'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <h1>
            VITAMIN C GLOW REVEALING SERUM
            </h1>
            <p>
            Our radiance-reviving superhero to help achieve the ultimate dewy complexion. Ready to make dull skin a thing of the past, our new concoction is made with 10% natural origin vitamin C! It’s also enriched with bakuchiol.
            </p>
            <Button className='btn-primary'>Shop Now</Button>
          </Col>
          <Col>
            <img
            src='https://media.thebodyshop.in/media/logo/image/2._Content_Section.jpg'
            alt='body-shop'
            className='logo'></img>
          </Col>
        </Row>
      </div>
      <div className='products-details'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <h1>PICKS FOR YOU</h1>
            <p>Our hardworking beauty treats care for your body from head to toe, no matter what. Check out our all-time most loved products!</p>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2F3._Picks_for_you_Strawberry_Yogurt_2.jpg&w=384&q=75' />
              <Card.Body>
                <Card.Title>Strawberry Body Yogurt</Card.Title>
                <Card.Text>
                  Light, Non-greasy, gel cream that leaves your dry skin feeling insta...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2F3._Picks_for_you_BR_shpower_gel_1.jpg&w=384&q=75' />
              <Card.Body>
                <Card.Title>British Rose Shower Gel</Card.Title>
                <Card.Text>
                 Get that beautiful body feeling refreshed and squeaky clean with our...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2F3._Picks_for_you_Skin_Defence_1.jpg&w=384&q=75' />
              <Card.Body>
                <Card.Title>Skin Defence SPF 50PA...</Card.Title>
                <Card.Text>
                  Our Skin defence multi protection light essence is an ultra light ...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className='image-logo'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <img
            src='https://www.thebodyshop.in/_next/image?url=https%3A%2F%2Fmedia.thebodyshop.in%2Fmedia%2Flogo%2Fimage%2Fbe_seen_be_heard.jpg&w=1920&q=75'
            alt='logo-image'
            className='body-shop'></img>
          </Col>
        </Row>
      </div>
      <div className='image'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <img
            src='https://media.thebodyshop.in/media/logo/image/BR_Range_pick_of_the_month_650x650_1.jpg'
            alt='img-logo'
            className='body-shop'></img>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <img
            src='https://media.thebodyshop.in/media/logo/image/BR_pick_of_the_month_500x500_1.jpg'
            alt='img-logo'
            className='body-shop'></img>
          </Col>
          <Col>
            <h1>APRIL BRITISH ROSE BATH & BODY CARE</h1>
            <p>There’s nothing better than the smell of a British rose garden. So naturally, we decided to capture the scent and create a range of British Rose body care products – shower gels, body moisturisers, hand creams and soaps.</p>
            <Button className='btn-primary'>SHOP NOW</Button>
          </Col>
        </Row>
      </div>
      <div className='product'>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3}>
            <h1>APRIL GINGER HAIRCARE</h1>
            <p>When things get a tad dry, our Ginger haircare range is just the ticket. Enter our iconic bestselling big hitter, Ginger Anti-Dandruff Shampoo. Why the hype? It’s blended with ginger essential oil and infused with birch bark, white willow extracts...</p>
            <Button className='btn-primary'>Shop Now</Button>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
          <img
          src='https://media.thebodyshop.in/media/logo/image/Ginger_Pick_of_the_month_650x650_1.jpg'
          alt='img-log'
          className='logo'></img>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
          <img
          src='https://media.thebodyshop.in/media/logo/image/Ginger_Pick_of_the_month_500x500_1.jpg'
          alt='img-log'
          className='logo'></img>
          </Col>
        </Row>
      </div>
      <div className='Cards'>
        <Row>
          <Col>
          <h1>MORE TO SHOP</h1>
          <p>Shop our nature inspired, vegan and sustainable treats that are good for you and the planet.</p>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/logo/image/gift_card_image_1.jpg' />
              <Card.Body>
                <Card.Title>GIFTS CARDS FROM RUPEES 500</Card.Title>
                <Card.Text>
                  Our e gift cards take the guesswork out of gift giving and are...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/logo/image/gift_card_image_1.jpg' />
              <Card.Body>
                <Card.Title>LOYALTY CLUB</Card.Title>
                <Card.Text>
                  Our loyalty programme lets you earn points and enjoy exclusive offers...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} lg={3}>
            <Card className='product-card'>
              <Card.Img variant='top' src='https://media.thebodyshop.in/media/logo/image/store_image_376x321_1_.jpg' />
              <Card.Body>
                <Card.Title>HEAD TO STORE</Card.Title>
                <Card.Text>
                  Visit for free personalised consultation and makeover.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
     <div className='carousel'>
      <SlideShow />
     </div>
     <div className='content'>
      <Row>
        <Col xs={12} sm={6} md={4} lg={3}>
          <h1>NEED HELP?</h1>
          <p>Our Customer Care is always available for your help. Reach us at customercare.tbs@questretail.in or contact us at +91-9599227343
            Monday to Sunday: 9AM - 6PM</p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
         <h1>FOLLOW US</h1>
         <p>Be first to know new arrivals & exclusive offers.</p>
         <img
         src='https://www.thebodyshop.in/images/1.svg'
         alt='fb-logo'
         className='logo'></img>
         <img
         src='https://www.thebodyshop.in/images/2.svg'
         alt='twitter-logo'
         className='logo'></img>
         <img
         src='https://www.thebodyshop.in/images/3.svg'
         alt='insta-logo'
         className='logo'></img>
         <img
         src='https://www.thebodyshop.in/images/5.svg'
         alt='logo'
         className='logo'></img>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
          <p>Be the first to know about our exclusive offers.</p>
           <Button className='btn-primary'>Subscribe</Button>   
        </Col>
      </Row>
     </div>
     <div className='footer-content'>
      <Footer />
     </div>
    </div>
  );
};
export default BodyContent;
