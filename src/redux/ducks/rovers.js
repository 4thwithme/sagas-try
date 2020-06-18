export const GET_ROVER_PHOTOS = "GET_ROVER_PHOTOS";
export const PUT_ROVER_PHOTOS = "PUT_ROVER_PHOTOS";

export const getRoverPhotos = (...params) => ({
  type: GET_ROVER_PHOTOS,
  params
});

export const putroverPhotos = (payload) => ({
  type: PUT_ROVER_PHOTOS,
  payload
});

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_ROVER_PHOTOS: {
      return payload;
    }

    default:
      return state;
  }
};
