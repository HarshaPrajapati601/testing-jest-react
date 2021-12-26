import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import combineReducers from 'reducers';
import reduxPromise from 'redux-promise';
import  async from 'middlewares/async';
import stateValidator from 'middlewares/stateValidator';



const Root = ({ children, initialState = {} }) => {
    const store = createStore(
        combineReducers,
        initialState,
        applyMiddleware(async, stateValidator )
        );
    return(
        <Provider store={store}>
            {children}
            </Provider>

    )
}

export default Root;