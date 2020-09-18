import React from "react";
import './MainPage.scss'

import ImagePanel from '../../../ImagePanel/ImagePanel'

const ignoreSeenImages = ({ images, refresh }) => {
  return images.filter(image => !image.seen)
}

const imageObjectsToJsx = (images) => {
  return images.map(image => {
    return (
      <>
        <ImagePanel image={image} />
      {/* <img src={padlock}/> */}
      </>
    )
  })
}

const displayImages = (props) => {
  const images = ignoreSeenImages(props)
  const imageElements = imageObjectsToJsx(images)
  const columns = [1, 2, 3, 4, 5]
  columns.forEach((column, i) => {
    const newImgSet = imageElements.reduce((set, img, j) => {
        if (j / 4 < column && j / 4 >= i) {
          set.push(img)
        }
        return set
      }, [])
    columns[i] = <div className="column" key={i}>{newImgSet}</div>
  }, [])  
  return columns
}

const MainPage = (props) => {
  return (
    <div className="imageContainer">
      {displayImages(props)}
    </div>
  )
};

export default MainPage;