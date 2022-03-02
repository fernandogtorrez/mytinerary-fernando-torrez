import React, {useEffect, useState} from 'react'
import axios from 'axios'
import "../styles/card.css";


const Cards = () => {
    const [allcities, setAllCities] = useState([])
    const [cardsCities, setCardsCities] = useState([])
    /* const [data, setData] = useState();
    const [searchResults, setSearchResults] = useState(); */
    const [search, setSearch] = useState('')
    
    const getApi = async () =>{
        await axios.get("http://localhost:4000/api/V1/allcities")
        .then(response=>{
            console.log(response.data.response.ciudades);
            setAllCities(response.data.response.ciudades);
            setCardsCities(response.data.response.ciudades);
            /* setData(response.data.response.cities); */
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        getApi();
    },[])

    /* useEffect(()=>{
        if (searchResults !== undefined){
            setData(searchResults)
        }
    
    },[searchResults]) */

    const handleChange = e => {
        setSearch(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda)=>{
        let resultadoBusqueda = cardsCities.filter((elemento)=>{
            if(elemento.cities.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase().trim()) || elemento.country.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase().trim())){
                return elemento
            }
        })
        setAllCities(resultadoBusqueda)
    }
    
  return (
    <>
        <div className='input-cities'>
            <h3>Find the city of your dreams!</h3>
            <input type='text' value={search} onChange={handleChange} placeholder='Enter yout destination...'/>
        </div>
        {allcities?.map(datos =>
            <div className='body'>
                <div className='carta'>
                    <div className='img-sec'>
                        <img className='img-carta' src={process.env.PUBLIC_URL+ `/images/${datos.image}`}/>
                    </div>
                        <div className='info'>
                            <h1 className='title-carta'>{datos.country}</h1>
                            <h2 className='title-carta'>{datos.cities}</h2>
                            <p className='parrafo-carta'>{datos.description}</p>
                            <div className='btn-enviar'>
                                <button>See more</button>
                            </div>
                        </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Cards