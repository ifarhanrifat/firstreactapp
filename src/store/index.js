import {createStore} from 'redux';
import reducers from '../reducers/index';

const store = createStore(reducers);

export default store;

//store ko empty object dena parta hai, taa k wo already jo object he us se compare kr k update krta he. Object ka version bnata rehta hai.
//Target new object hona chahiye.
//object assign(
//state management k liye use hota redux, siblings component ko update krna ho to ese krte. warna child k through krna parta tha long process k through