export const GET_APOD = "GET_APOD";
export const PUT_APOD = "PUT_APOD";

export const getAPOD = () => ({
  type: GET_APOD
});

export const putAPOD = (payload) => ({
  type: PUT_APOD,
  payload
});

const initialState = null;

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case PUT_APOD: {
      return payload;
    }

    default:
      return state;
  }
};
