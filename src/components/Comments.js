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
    await props.modifiComment(commentData)
    setReload(!reload)

  }
  async function eliminarComentario(event) {
    await props.deleteComment(event.target.id)
    setReload(!reload)
    
  }
  return (
    <div>
         {props?.comments.map(comment =>
                  <>
                    {comment.userID !== props.user?.id ?
                      <div class="card cardComments " key={comment._id}>
                        <div class="card-header">
                          {comment.userID?.userName}
                        </div>
                        <div class="card-body">
                          <p class="card-text">{comment.comment}</p>
                        </div>
                      </div> :

                      <div class="card cardComments">
                        <div class="card-header">
                          {comment.userID.userName}
                        </div>
                        <div class="card-body ">
                          <textarea type="text" className="card-text textComments" onChange={(event) => setModifi(event.target.value)} defaultValue={comment.comment} />
                          <button id={comment._id} onClick={modificarComentario} class="btn btn-primary">Modificar</button>
                          <button id={comment._id} onClick={eliminarComentario} class="btn btn-primary">Eliminar</button>
                          
                        </div>
                      </div>

                    }
                  </>
                )}

                {props.user ?
                  <div class="card cardComments">
                    <div class="card-header">
                      DEJANOS TU COMENTARIO
                    </div>
                    <div class="card-body ">
                      <textarea onChange={(event) => setInputText(event.target.value)} className="card-text textComments" value={inputText} />
                      <button id={props.id} onClick={cargarComentario} class="btn btn-primary">Cargar</button>
                    </div>
                  </div> :
                  <h1>Realiza singIn y dejanos tu comentario</h1>
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