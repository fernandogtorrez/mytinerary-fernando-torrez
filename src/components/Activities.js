import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import activitiesActions from '../redux/actions/activitiesActions'
import '../styles/carddetails.css'

const Activities = (props) => {
    const [activities, setActivities] = useState([])
     useEffect(() =>{
         props.fetchActivitiesItineraryId(props.iditinerary)
         .then(res => setActivities(res.response))
     },[])
     
  return (
    <div className='activitieshome'>
        <h2>Activities</h2>
        <div className='activitieshome1'>
            {activities?.map(activity =>
            <div className='activitieshome2'>
                <div className='activities2'
                style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL}/images/${activity.imageAct}')`,
                    backgroundSize: 'cover',
                }}
                >
                    <div className='activities1'>
                        <h1>{activity.name}</h1>
                    </div>
                </div>
                
            </div>  
            )}
        </div>
    </div>
  )
}

const mapDispatchToProps={
    fetchActivitiesItineraryId: activitiesActions.fetchActivitiesItineraryId,
}

export default connect(null, mapDispatchToProps)(Activities);
