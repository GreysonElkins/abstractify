import React from "react";

import './UserPage.scss'

import SavedSetCard from '../../../SavedSetCard/SavedSetCard'

const UserPage = (props) => {
  return <div className="saved-cards">{cards(props)}</div>;
};


const cards = (props) => {
  return props.imageSets.map((set, i)=> {
    return <SavedSetCard set={set} key={`set${i}`}/>
  })
}

export default UserPage;
