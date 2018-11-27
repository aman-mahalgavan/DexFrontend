import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchData() {
    console.log("Calling API...")
//   const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield fetch('http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000/GetOwnerList')
        .then(response => {
            console.log("Received the data. Forwarding JSON");
            return response.json();
        });    
  yield put({ type: "RECEIVED_DATA", data: json, });
}
function* addOwner() {
    console.log("Calling API...")
//   const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield fetch('http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000/AddOwner')
        .then(response => {
            console.log("Added New Owner. Forwarding JSON");
            return response.json();
        });    
  yield put({ type: "ADDED_NEW_OWNER", data: json, });
}
function* addProduct() {
    console.log("Calling API...")
//   const json = yield fetch('https://newsapi.org/v1/articles?source= cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
  const json = yield fetch('http://ec2-54-180-123-66.ap-northeast-2.compute.amazonaws.com:3000/AddProduct')
        .then(response => {
            console.log("Added New Product. Forwarding JSON");
            return response.json();
        });    
  yield put({ type: "ADDED_NEW_Product", data: json, });
}
function* actionWatcher() {
     yield takeLatest('FETCH_DATA', fetchData)
     yield takeLatest('ADD_OWNER', addOwner)
     yield takeLatest('ADD_PRODUCT', addProduct)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}