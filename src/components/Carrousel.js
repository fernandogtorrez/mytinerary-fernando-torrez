import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carrousel.css";
import datos from './Datos'

// import required modules
import { Grid, Pagination, Autoplay, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        grid={{
          columns: 2
        }}
        slidesPerGroup={4}
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
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        {datos.map(item =>
          <SwiperSlide className="swiperslide">
            <div className="title">
            <img className="img-city" src={process.env.PUBLIC_URL+ `/imagenes/${item.image}`} />
              <h2>{item.country}</h2>
              <h3>{item.cities}</h3>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </>
  );
}
  

