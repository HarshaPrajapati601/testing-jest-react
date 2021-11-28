import { combineReducers } from 'reducers';
import  commentReducers  from 'reducers/comments';

export default combineReducers({
    comments: commentReducers
});
