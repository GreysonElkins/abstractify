require('dotenv').config();
const { ApiKey } = require('./API_KEY')

const pages = ['https://api.pexels.com/v1/search?per_page=80&query=abstract+landscape+urban']

const cleanPhotos = (photos) => {
  return photos.map(photo => {
    return {
      id: photo.id,
      width: photo.width,
      height: photo.height,
      url: photo.src.medium,
      photographer: {
        name: photo.photographer,
        url: photo.photographer_url,
      },
      locked: false,
      seen: false 
    };
  })
}

export const getImages = () => {
  let res
  try {
    return fetch(pages[0], {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: ApiKey,
      },
    })
      .then((response) => {
        res = response;
        return response.json();
      })
      .then((imageSet) => {
        if (res.ok) {
          pages.unshift(imageSet.next_page);
          return cleanPhotos(imageSet.photos);
        } else {
          return `Something went wrong while
         getting the images, error: ${res.status}`;
        }
      });
  } catch (error) {
    return error.message
  }
}