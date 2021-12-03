import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from 'reducers';


const Root = ({children}) => {
    const store = createStore(combineReducers);
    return(
        <Provider store={store}>
            {children}
            </Provider>

    )
}

export default Root;