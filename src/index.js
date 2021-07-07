import {createStore} from "redux";
import {inc} from './actions';
import reducer from "./reducer";


const store = createStore(reducer);
const {dispatch} = store;
store.subscribe(() =>{
    document
        .querySelector('#counter')
        .textContent = store.getState().reduce((sum, curr) =>{
            return sum + curr;
    });
});

document
    .querySelector('#main-button')
    .addEventListener('click', (e) =>{
        e.preventDefault();
        const payload = +document.querySelector('#value').value;
        dispatch(inc(payload));
    });

