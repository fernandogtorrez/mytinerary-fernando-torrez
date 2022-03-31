import React from 'react'
import itineraryAction from '../redux/actions/itineraryActions'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { connect } from 'react-redux';
import '../styles/carddetails.css'

const Likes = (props) => {
    const reload = props.reload
    const setReload = props.setReload

    const likeOrDislike = async () => {
        await props.likeDislike(props.id)

        setReload(!reload)
    }
  return (
    <>
        <div className='likeDislike'>
            {props.user ?
                (<button onClick={likeOrDislike}>{props?.like.includes(props.user.id) ?
                    <span style={{ color: "red", fontSize:30 }}><FavoriteIcon/></span> :
                    <span style={{  fontSize:30 }}><FavoriteBorderIcon/></span>}</button>)

                : (<span style={{  fontSize:30 }}><FavoriteBorderIcon/></span>)}

            <h3 style={{  color:"black ",fontSize:30 }}>{props?.like.length}</h3>
        </div>
    </>
  )
}

const mapDispatchToProps = {
    likeDislike: itineraryAction.likeDislike,
}
const mapStateToProps= (state) =>{
    return{
        user: state.userReducers.user
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Likes);