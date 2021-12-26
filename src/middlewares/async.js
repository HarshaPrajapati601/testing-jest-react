export default function({ dispatch}) { //called with diff properties of obj
    return function(next){ //next is a ref to the next middleware inside of our chain to  forward the action to next middleware
        return function(action) {

        }
    }
}
//middlewares are series of functions that return each other.

