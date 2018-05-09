import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 100,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 992,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 100
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 100
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      speed: 100
    }
  }]
};

const styleSelected = {
  border: '2px solid #E0AA00'
}
const SelectPayBanca = ({ banks, setSelectedBank, selectedBank }) => (
  <div className="mx-4 my-2 mb-4">
    <Slider {...settings}>
      {banks.map(bank =>
        <div className="p-2 p-md-3"
          key={bank.name}
          onClick={() => setSelectedBank(bank)}
        >
          <img className="img-fluid"
            src={bank.img}
            alt={bank.name}
            style={bank.name === selectedBank.name ? { ...styleSelected, cursor: 'pointer' } : { cursor: 'pointer', border: '2px solid #FFD87F' }}
          />
          {bank.text !== '' ? <p className='text-center describe-text'>{bank.text}</p> : null}
        </div>
      )}
    </Slider>
  </div>
);

export default SelectPayBanca;
