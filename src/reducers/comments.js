import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/type";
import { getComments } from "Helpers/commentsHelper";

const commentsReducer = (state = [], action) => {
    switch(action.type) {
        case SAVE_COMMENT: 
        return [ ...state, action.payload];

        case FETCH_COMMENTS:
            const data = action.payload.data;
            const filteredData =  getComments(data);
        return [ ...state, ...filteredData ]
        default:
             return state;
    }

}

export default commentsReducer;