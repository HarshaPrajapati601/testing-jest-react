import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({dispatch, getState}) => (next) => (action) =>{
    // do nothing and call next and pass the action to the reducer
    next(action);
    //grab our satte and ateempt to validate it in coomparision to the schema
    let validate = tv4.validate(getState(), stateSchema);
    if(validate) {
        console.log("valid");
    }

}