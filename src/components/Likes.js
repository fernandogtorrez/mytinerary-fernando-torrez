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
            <p>{props.like.length}</p>
            {props.like.length?<FavoriteIcon onClick={likeOrDislike}/>:<FavoriteBorderIcon onClick={likeOrDislike}/>}
        </div>
    </>
  )
}

const mapDispatchToProps = {
    likeDislike: itineraryAction.likeDislike,
}

export default connect(null, mapDispatchToProps) (Likes)