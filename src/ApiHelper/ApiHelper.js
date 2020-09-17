require("dotenv").config();

export const getPhotos = () => {
  let res
  try {
    return fetch('https://api.pexels.com/v1/curated?per_page=80', {
      authorization: API_KEY
    }).then(response => {
      let res = response
      return response.json() 
    }).then(imageSet => {
      if (res.ok) {
        return imageSet
      } else {
        return `Something went wrong while
         getting the images, error: ${response.status}`
      }
    })
  } catch (error) {
    return error.message
  }
}