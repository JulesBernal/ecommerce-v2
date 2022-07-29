import React, {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function Slideshow(props) {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  console.log(props.cat)
  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={5000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.cat ? "ships/donTanker.webp" : "ships/galley.webp" }
            alt="Galley-La Ship from One Piece"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="fruits/devilFruit.webp"
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.cat ? "ships/donSub.webp" : "ships/yontamaria.webp" }
            alt="Yonta Maria Ship from One Piece"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.cat ? "ships/smileTree.webp" : "ships/treasure.jpg" } 
            alt="Treasure from One Piece"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
