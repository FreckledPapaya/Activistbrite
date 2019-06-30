import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';



document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const preloadedState = {};
    const store = createStore(preloadedState);
    ReactDOM.render(<h2>React is running</h2>, root)
});