import React, {useState} from 'react'
import { connect } from 'react-redux'
import commentsActions from '../redux/actions/commentsActions'
import Swal from 'sweetalert2'


const Comments = (props) => {
    const reload = props.reload
    const setReload = props.setReload
    const [itinerario, setItinerario] = useState()
    const [inputText, setInputText] = useState()
    const [modifi, setModifi] = useState()
    const itinerarios = props.itinerarios

    async function cargarComentario(event) {
      
      const commentData = {
        itinerario: event.target.id,
        comment: inputText,
      }
      await props.addComment(commentData)
      setReload(!reload)
        .then((response) => setItinerario(response.data.response.nuevoComment), setInputText(""))
    }
    
  
    async function modificarComentario(event) {
      const commentData = {
        commentID: event.target.id,
        comment: modifi,
      }
      Swal.fire({
        title: 'Modify',
        text: "Are you sure to modify your comment?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Modified!',
            'your comment has been modified',
            'success'
          )
          props.modifiComment(commentData).then(res =>{
            if(res.data.success){
              setItinerario(res.data.response.deleteComment.comments)
              setReload(!reload)
            }
          })
        }
      })
    }
    async function eliminarComentario(event) {
      Swal.fire({
        title: 'Delet',
        text: "Are you sure you want to delete your comment?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          props.deleteComment(event.target.id).then(res =>{
            if(res.data.success){
              setItinerario(res.data.response.deleteComment.comments)
              setReload(!reload)
            }
          })
        }
      })

    }

  return (
    <div>
         {(itinerarios.comments).map(comment =>
                  <>
                    {comment.userID?._id !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          <img src={comment.userID.userPhoto}/>
                          <p className='userName'>{comment.userID.firstName} {comment.userID.lastName}</p>
                          <div class="card-body">
                          <p class="card-text">
                            {comment.comment}
                          </p>
                        </div>
                        </div>
                        
                      </div> :
                      <div class="card cardComments">
                        <div class="card-header">
                          <img className='userIdImage' src={comment.userID.userPhoto}/>
                          <p className='userName'>{comment.userID.firstName} {comment.userID.lastName}</p>
                          <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} class="btn btn-primary">Modify</button>
                          <button id={comment._id} onClick={eliminarComentario} class="btn btn-primary">Delet</button>
                          
                        </div>
                        </div>
                        
                      </div>

                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      LEAVE US YOUR COMMENT
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button id={props.id} onClick={cargarComentario} class="btn btn-primary">Charge</button>
                    </div>
                  </div> :
                  <h1 className='comment-signin'>Make singIn and leave us your comment</h1>
                }
    </div>
  )
}

const mapDispatchToProps = {
    addComment: commentsActions.addComment,
    modifiComment: commentsActions.modifiComment,
    deleteComment: commentsActions.deleteComment,
}

const mapStateToProps = (state) => {
    return{
        user: state.userReducers.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Comments)