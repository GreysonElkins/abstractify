import React from "react";

import SavedSetCard from '../../../SavedSetCard/SavedSetCard'

const UserPage = (props) => {
  return <>{cards(props)}</>;
};


const cards = (props) => {
  return props.imageSets.map((set, i)=> {
    return <SavedSetCard set={set} key={`set${i}`}/>
  })
}

export default UserPage;
