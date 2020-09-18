import React from 'react'

const ImagePanel = ({image}) => {
  return (
    <>
      <img
        key={image.id}
        alt={`Photographed by ${image.photographer.name}`}
        src={image.url}
        id={image.id}
      />
    </>
  ); 
}

export default ImagePanel