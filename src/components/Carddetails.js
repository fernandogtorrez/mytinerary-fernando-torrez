import React from 'react'
import '../styles/carddetails.css'
import { Accordion } from 'react-bootstrap'
import Activities from './Activities'
import Likes from './Likes'
import Comments from './Comments'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';


const Carddetails = (props) => {

  const reload = props.reload
  const setReload = props.setReload

  return (
    <div className="body">
      <div className="carddetails">
          <div className="content">
            <div>
                <p>Price: {props.data.price}</p>
            </div>
            <div>
                <p>Duration: {props.data.duration}</p>
            </div>
             
              <div className="hashAndDesc">
                <p className="hash">{props.data.hashtags}</p>
              </div>
              <Likes like={props.data.like} id={props.data._id} reload={reload} setReload={setReload}/>
              <div className='perfil-foto'>
                <div className="profile">
                  <img src={process.env.PUBLIC_URL+`/images/${props.data.image}`} className="Profile Img"/>
                </div>
                <div className="tittles">
                    <h2>{props.data.userName}</h2>
                </div>
            </div>
          </div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header><h2>{props.data.itineraryName}</h2></Accordion.Header>
              <Accordion.Body>
                <Activities iditinerary= {props.data._id}/>
                <Comments itinerarios = {props.data} id={props.data._id} reload={reload} setReload={setReload}/>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
      </div>
    </div>
  );
}

export default (Carddetails);