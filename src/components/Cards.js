import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/card.css";
import {Link as LinkRouter} from 'react-router-dom'
import { connect } from "react-redux";
import citiesAction from "../redux/actions/citiesActions";

const Cards = (props) => {

  useEffect(() => {
    props.fetchCities()
  }, []);

  

  return (
    <>
      <div className="input-cities">
        <h3>Find the city of your dreams!</h3>
        {/* <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Enter yout destination..."
        /> */}
      </div>
      {props.cities.length > 0 ? (
        props.cities?.map((datos) => (
          <div className="body">
            <div className="carta">
              <div className="img-sec">
                <img
                  className="img-carta"
                  src={process.env.PUBLIC_URL + `/images/${datos.image}`}
                />
              </div>
              <div className="info">
                <h1 className="title-carta">{datos.country}</h1>
                <h2 className="title-carta">{datos.cities}</h2>
                <p className="parrafo-carta">{datos.description}</p>
                <div className="btn-enviar">
                <LinkRouter to={`/details/${datos._id}`}>
                  <button>See more</button>
                </LinkRouter>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noencontrado">
          <h2>Oops! No results for your search.</h2>
          <img src="/images/turista2.png"/>
          <h2>Try another please...</h2>
        </div>
      
      )}
    </>
  );
};

const mapDispatchToProps = {

  fetchCities: citiesAction.fetchCities,

  }

  const mapStateToProps = (state) =>{

  return {

    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,

  }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Cards);
