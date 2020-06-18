import { takeEvery, take, call, put, all } from "redux-saga/effects";

import { GET_APOD, putAPOD } from "../redux/ducks/apod";
import API from "../api/api";
import { GET_ROVER_PHOTOS, putroverPhotos } from "../redux/ducks/rovers";

export const workerGetAPOD = function*() {
  const data = yield call(API.getAPOD);

  yield put(putAPOD(data));
};

export const workerGetRoverPhotos = function*(params) {
  console.log(...params);

  const data = yield call(API.getRoverPhotos, ...params);

  yield put(putroverPhotos(data.photos));
};

export const whatchGetAPOD = function*() {
  yield takeEvery(GET_APOD, workerGetAPOD);
};

export const whatchGetRoverPhotos = function*() {
  const { params } = yield take(GET_ROVER_PHOTOS);

  yield call(workerGetRoverPhotos, params);
};

export default function* rootSaga() {
  yield all([whatchGetAPOD(), whatchGetRoverPhotos()]);
}
