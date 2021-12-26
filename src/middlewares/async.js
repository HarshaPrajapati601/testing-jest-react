// export default ({ dispatch}) =>  //called with diff properties of obj
//      next =>  //next is a ref to the next middleware inside of our chain to  forward the action to next middleware
//         action => {        
//         }

// //middlewares are series of functions that return each other.
//total 3 funcuton that returns a fn and that in urn returns a fn

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ dispatch}) =>  next => action => {    
    //middleware logic
    //check to see if the action has a promise on its 'payload' property 
    //if it does then wait for it to resolve
    // if it doesnot then sent the action to the 
    //next middleware
    //if the action has payload and it has a promise
    if(!action.payload || !action.payload.then ) {
        //to forward the action to next middleware of pur chain
        return next(action);
    }
    //if it s a promise then we want to wait for  its data 
    //..and create a new action with the data 
    //and dispatch it
    action.payload.then(function(response) {
        const newAction = { ...action, payload: response};
        dispatch(newAction)
    })

        }

//middlewares are series of functions that return each other.
