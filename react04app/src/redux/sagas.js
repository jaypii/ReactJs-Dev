import { all } from 'redux-saga/effects';
import studentSagas from './student/saga';

export default function* rootSaga()

{yield all([
  studentSagas()
 ]);
}