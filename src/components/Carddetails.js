import { LinkRounded } from '@mui/icons-material'
import React from 'react'
import '../styles/carddetails.css'

const Carddetails = () => {
  return (
    <div className='itineraries'>
        <div className='itinerariesBody'>
            <div className='itineraryHead'>
                <div className='itineraryImg'></div>
                <div className='itineraryInfo'>
                    <div className="d-flex justify-content-between">
                        <div className='itineraryAuthor'>
                            <img className='authorPhoto'/>
                            <span className='authorName'></span>
                        </div>
                        <div className='adventure'></div>
                    </div>
                    <div className='itineraryTitle'>
                        <h2></h2>
                        <div className='likes'>

                        </div>
                    </div>
                    <p className='itineraryDescrip'>The views were spectacular! If you’re looking to get out of the city and see beautiful remote black sand beaches and big waves.</p>
                    <span className='hashtags'>
                        <p></p>
                        <p></p>
                        <p></p>
                    </span>
                    <div className='itineraryIcons'>
                        <span className='itineraryTime'>
                            <img/>
                        </span>
                        <span className='itineraryPrice'>
                            <img/>
                        </span>
                    </div>
                </div>
            </div>
            <div className='itineraryUnder'>
                <div className='activitiSeccion'>
                    <div>

                    </div>
                    <div className='commentConst'>
                        <div className='commentTitle'>
                            <h3>Comment Title</h3>
                        </div>
                        <div className='comments'>
                            <div className='commentData'>
                                    <div className='userIcon'></div>
                                    <div className='commentContainer'>
                                        <div className='comment'>
                                            <div className='userName'>
                                                <p>Fernando Torrez</p>
                                                <p>Felicidades</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='commentData'>
                                    <div className='userIcon'></div>
                                    <div className='commentContainer'>
                                        <div className='comment'>
                                            <div className='userName'>
                                                <p>Fernando Torrez</p>
                                                <p>Felicidades</p>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                            <div className='commentData'>
                                <div className='userIcon'></div>
                                <div className='commentContainer'>
                                    <div className='comment'>
                                        <div className='userName'>
                                            <p>Fernando Torrez</p>
                                            <p>Felicidades</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='commentInput'>
                            <input className='inputComment' type='text' placeholder='escriba' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='itineraryBtn'>
                <button>Click aqui</button>
            </div>
        </div>
        <div className='comingSoon'>
            <a href='/cities'>
                <button className='back'>Regresar a cities</button>
            </a>
        </div>
    </div>
  )
}

export default Carddetails