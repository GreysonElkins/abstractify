import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './SavedSetCard.scss'
 
const SavedSetCard = (props) => {
  return (
    <Link to={`/set/${props.set.id}`} className={props.isGaudy ? "saved-card" : "saved-card-mono"}>
      <div>
        <h1>{props.set.title}</h1>
        <p className="inner-text">
          Saved on {moment(props.set.created_at).format("MMM DD YYYY")}
        </p>
      </div>
    </Link>
  );
}

export default SavedSetCard