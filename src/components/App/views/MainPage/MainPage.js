import React from "react";
import './MainPage.scss'

const imageObjectsToJsx = ({ images }) => {
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

const diviUpImages = (props) => {
  const columns = [1, 2, 3, 4, 5]
  // filter out seen images at this point
  const imageElements = imageObjectsToJsx(props)
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
      {diviUpImages(props)}
    </div>
  )
};

export default MainPage;