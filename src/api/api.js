import api_key from "../secret/secret";

const getAPOD = (hd = false) =>
  fetch(`https://api.nasa.gov/planetary/apod?hd=${hd}&api_key=${api_key}`).then((responce) =>
    responce.json()
  );

const getRoverPhotos = (rover = "curiosity", page = "1", sol = "1") => {
  console.log(rover, page, sol);

  return fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?page=${page}&sol=${sol}&api_key=${api_key}`
  ).then((responce) => responce.json());
};

export default {
  getAPOD,
  getRoverPhotos
};
