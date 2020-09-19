import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
 
const SavedSetCard = (props) => {
  return (
  <Link to={`/set/${props.set.id}`}>
    <div class="saved-card"> 
      <h1>{props.set.title}</h1>
      <p>Saved on {moment(props.set.created_at).format('MMM DD YYYY')}</p>
    </div>
    </Link>
  )
}

export default SavedSetCard