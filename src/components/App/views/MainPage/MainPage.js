import React from "react";
import PropTypes from 'prop-types'
import './MainPage.scss'

import ImagePanel from '../../../ImagePanel/ImagePanel'

const MainPage = (props) => {
  return (
    <div className="imageContainer" key="container">
      {displayImages(props)}
    </div>
  );
};

const ignoreSeenImages = (images) => {
  return images.filter(image => !image.seen || image.locked)
}

const imageObjectsToJsx = (images, lockFn) => {
  return images.map(image => {
    return (
      <>
        <ImagePanel key={`image-panel-${image.id}`} image={image} toggleImageLock={lockFn}/>
      </>
    )
  })
}

const displayImages = (props) => {
  const images = ignoreSeenImages(props.images)
  const imagePanels = imageObjectsToJsx(
    images,
    props.toggleImageLock
  );
  const columns = [1, 2, 3, 4, 5]
  columns.forEach((column, i) => {
    const newImgSet = imagePanels.reduce((set, img, j) => {
        if (j / 4 < column && j / 4 >= i) {
          set.push(img)
        }
        return set
      }, [])
    columns[i] = <div className="column" key={`column${i}`}>{newImgSet}</div>
  }, [])  
  return columns
}

export default MainPage;

MainPage.propTypes = {
  images: PropTypes.array.isRequired,
  toggleImageLock: PropTypes.func.isRequired
}