import { all } from 'redux-saga/effects';

import news from './news/sagas';

export default function* rootSaga() {
  return yield all([news]);
}
