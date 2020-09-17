import React from "react";

const imageObjectsToJsx = ({ images }) => {
  return images.map(image => {
    return (
      <img 
        key={image.id}
        alt={`Photographed by ${image.photographer.name}`}
        src={image.url}
        // style={{width: images.width + 'px', height:images.height + 'px'}}
      />
    )
  })
}

const diviUpImages = (props) => {
  let i = 0
  const columns = [1, 2, 3, 4]
  // filter out seen images at this point
  const imageElements = imageObjectsToJsx(props)
  columns.forEach((column, i) => {
    const newImgSet = imageElements.reduce((set, img, j) => {
        if (j / 4 < column && j / 4 > i) {
          set.push(img)
        }
        return set
      }, [])
    columns[i] = <div class="column">{newImgSet}</div>
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


// { "id": 2109739, 
// "width": 4000, 
// "height": 5333, 
// "url": "https://www.pexels.com/photo/grey-railings-on-rock-near-body-of-water-2109739/", 
// "photographer": { "name": "Matt Hardy", "url": "https://www.pexels.com/@matthardy" }, 
// "locked": false, 
// "seen": false }