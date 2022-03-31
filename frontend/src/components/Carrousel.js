import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carrousel.css";
import datos from './Datos'


import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <h1 className="popular">Popular MYtineraries</h1>
      <Swiper
        slidesPerView={2}
        grid={{
          rows: 2
        }}
        slidesPerGroup={2}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        hashNavigation={{
          watchState: true
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="d-flex justify-content-center flex-wrap">
        {datos.map((item,index) =>
          <SwiperSlide key={index} className="swiperslide d-flex justify-content-center flex-wrap">
            <div className="title">
              <img className="img-city" src={process.env.PUBLIC_URL+ `/images/${item.image}`} />
              <div className="layer">
                <h2 className="country-city">{item.country}</h2>
                <h3 className="country-city">{item.cities}</h3>
              </div>
              
            </div>
          </SwiperSlide>
        )}
        </div>
      </Swiper>
    </>
  );
}

