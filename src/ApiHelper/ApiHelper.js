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
        authorization: `563492ad6f917000010000015d0eadc38b6c47e682101b7a55daca2d`,
      },
    })
      .then((response) => {
        res = response;
        return response.json();
      })
      .then((imageSet) => {
        if (res.ok) {
          pages.unshift(imageSet.nextPage);
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