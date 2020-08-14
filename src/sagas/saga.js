//import {delay} from "redux-saga";
//delay like setting a timer 
//import {takeEvery, put, delay} from 'redux-saga/effects';
import {takeLatest, put, delay} from 'redux-saga/effects';

//like a dispatch
function* ageUpAsync() {
    yield delay(4000);
    yield put({type: 'AGE_UP_ASYNC', value: 1})

}

function* ageDownAsync() {
    yield delay(3000);
    yield put({type: 'AGE_DOWN_ASYNC', value:1});
}


//generator function
export function* watchAgeUp(){
    yield takeLatest('AGE_UP', ageUpAsync);
}

export function* watchAgeDown(){
    yield takeLatest('AGE_DOWN', ageDownAsync);
}