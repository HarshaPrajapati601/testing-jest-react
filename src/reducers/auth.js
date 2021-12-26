const { CHANGE_AUTH } = require("actions/type");

const authReducer = (state = false, action) => {
    switch(action.type) {
        case CHANGE_AUTH:
        return action.payload;

        default:
            return state
    }
}

export default authReducer;