
import Carousel from 'react-bootstrap/Carousel'
import Crypto from '../../images/crypto.jpeg';
import Onlydevs from '../../images/only-devs.png';
export default function myCarousel() {
  return (
    <div className='col-sm-12 mx-auto'>
      <Carousel className='carousel'>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 my-5 rounded"
            src={Crypto}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100 mt-3 mb-5 rounded"
            src={Onlydevs}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}