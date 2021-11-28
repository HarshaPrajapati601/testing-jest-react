import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from 'reducers';

const store = createStore(combineReducers, {});

const Root = (props) => {
    return(
        <Provider store={store}>
            {props.children}
            </Provider>

    )
}

export default Root;