require("dotenv").config();

const pages = ['https://api.pexels.com/v1/curated?per_page=80']

const cleanPhotos = (photos) => {
  return photos.map(photo => {
    return {
      id: photo.id,
      width: photo.width,
      height: photo.height,
      url: photo.url,
      photographer: {
        name: photo.photographer,
        url: photo.photographer_url,
      },
      locked: false 
    };
  })
}

export const getPhotos = () => {
  let res
  try {
    return fetch(pages[0], {
      authorization: API_KEY
    }).then(response => {
      let res = response
      return response.json() 
    }).then(imageSet => {
      if (res.ok) {
        pages.unshift(imageSet.nextPage)
        return cleanPhotos(imageSet.photos)
      } else {
        return `Something went wrong while
         getting the images, error: ${response.status}`
      }
    })
  } catch (error) {
    return error.message
  }
}