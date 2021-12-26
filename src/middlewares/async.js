// export default ({ dispatch}) =>  //called with diff properties of obj
//      next =>  //next is a ref to the next middleware inside of our chain to  forward the action to next middleware
//         action => {        
//         }

// //middlewares are series of functions that return each other.
//total 3 funcuton that returns a fn and that in urn returns a fn

export default ({ dispatch}) =>  next => action => {    
    //middleware logic
    //check to see if the action has a promise on its 'payload' property 
    //if it does then wait for it to resolve
    // if it doesnot then sent the action to the 
    //next middleware
        }

//middlewares are series of functions that return each other.
