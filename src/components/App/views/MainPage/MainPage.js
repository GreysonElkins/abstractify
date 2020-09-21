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

const sortImages = ({ images, isSaved }) => {
  
  let unlockedImages

  if(isSaved) {
    unlockedImages = images.filter(image => image.lockedIndex === undefined)
  } else {
    unlockedImages = images.filter(image => !image.seen && image.lockedIndex === undefined)
  }

    const lockedImages = images.filter(image => image.lockedIndex > -1)
      .sort((a, b) => a.lockedIndex - b.lockedIndex)
    
    let sortedImages = lockedImages.reduce((allImages, locked, i) => {
      allImages.splice(locked.lockedIndex, 0, locked)
      return allImages
    }, unlockedImages)

    return sortedImages
  } 

const imageObjectsToJsx = (images, lockFn) => {
  return images.map(image => {
    return <ImagePanel key={`image-panel-${image.id}`} image={image} toggleImageLock={lockFn}/>
  })
}

const displayImages = (props) => {
    const images = sortImages(props)
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
  toggleImageLock: PropTypes.func.isRequired,
  isSaved: PropTypes.bool
}