/* import React, { useRef, useState } from "react";

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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        modules={[Grid, Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <div className="d-flex justify-content-center flex-wrap">
        {datos.map(item =>
          <SwiperSlide className="swiperslide d-flex justify-content-center flex-wrap">
            <div className="title ">
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
} */
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CardsMain from "./CardMain";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, Navigation } from "swiper";


const CarouselMain = () => {
    let cities = [
        [
        {
            country: "Japan",
            place: "Tokyo",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Italy",
            place: "Roma",
            image: "./images/buenosaires.jpg",
        },
        {
            country: "Argentina",
            place: "Rio Negro",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Brazil",
            place: "Rio de Janeiro",
            image:"./images/buenosaires.jpg",
        },
        ],
        [
        {
            country: "Panama",
            place: "Panama",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Norway",
            place: "Oslo",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "United states",
            place: "New York",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Russia",
            place: "Moscow",
            image:"./images/buenosaires.jpg",
        },
        ],
        [
        {
            country: "Spain",
            place: "Madrid",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Armenia",
            place: "Yerevan",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Egypt",
            place: "Cairo",
            image:"./images/buenosaires.jpg",
        },
        {
            country: "Greece",
            place: "Atenas",
            image:"./images/buenosaires.jpg",
        },
        ],
    ];
    return (
        <>
        <h2 className="carouselTitle">Popular MyTineraries</h2>
        <Swiper 
        navigation={true} 
        autoplay={{
            delay: 3500,
            disableOnInteraction: false
        }} 
        modules={[Navigation, Autoplay]} 
        loop={true} 
        className="mySwiper"
        >
        {cities.map((citiesArray, index) =>{
            return (
                <>
                <SwiperSlide key={index}>
                <div className="d-flex justify-content-center flex-wrap">
                {citiesArray.map(city =>{
                    return <CardsMain city={city} key={city.place}/>
                })}
                </div>
                </SwiperSlide>
                </>
            )

        } )}
        
        </Swiper>
        </>
    );
    };

export default CarouselMain;
  

