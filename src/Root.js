import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from 'reducers';


const Root = ({ children, initialState = {} }) => {
    // const store = createStore(combineReducers);
    const store = createStore(combineReducers, initialState);
    return(
        <Provider store={store}>
            {children}
            </Provider>

    )
}

export default Root;