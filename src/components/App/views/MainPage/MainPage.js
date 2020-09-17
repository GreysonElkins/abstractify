import React from "react";
import './MainPage.scss'

const ignoreSeenImages = (images) => {
  return images.map(image => !image.seen && image)
}

const imageObjectsToJsx = (images) => {
  return images.map(image => {
    return (
      <img 
        key={image.id}
        alt={`Photographed by ${image.photographer.name}`}
        src={image.url}
        id={image.id}
      />
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

const MainPage = ({ images }) => {
  return (
    <div className="imageContainer">
      {displayImages(images)}
    </div>
  )
};

export default MainPage;