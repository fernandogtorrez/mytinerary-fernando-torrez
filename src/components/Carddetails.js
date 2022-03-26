import React, { useEffect, useState } from 'react'
import '../styles/carddetails.css'
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions'
import {ChevronDownOutline} from 'react-ionicons'


const Carddetails = ({data}) => {

  let card;

  useEffect(()=>{
      card = document.querySelector(".carddetails");
    },[])
  

  function dropdown (){
      card.classList.toggle("active")
  }

  return (
    <div className="body">
      <div className="carddetails">
          <div className="content">
            <div>
              <h2>{data.itineraryName}</h2>
            </div>
             
              <div className="hashAndDesc">
                <p className="desc">{data.description}</p>
                <p className="hash">{data.hashtags}</p>
              </div>
              {/* <div className="icons">
                  <h3>{data.likes}<img src={Like} className="iconLike"/></h3>
                  <p><img src={Cash} className="iconLike"/>
                  <img src={Cash} className="iconLike"/></p>

              </div> */}
              <div className='perfil-foto'>
                <div className="profile">
                  <img src={process.env.PUBLIC_URL+`/images/${data.image}`} className="Profile Img"/>
                </div>
                <div className="tittles">
                    <h2>{data.userName}</h2>
                </div>
            </div>
          </div>
          <div className="nav-under">
              <h1>Under Construction</h1>
          </div>
          <div className="toggle">
            <p>View More</p>
            <ChevronDownOutline onClick={dropdown} className='icon'/>
          </div>
      </div>
    </div>
  );
}

export default Carddetails;