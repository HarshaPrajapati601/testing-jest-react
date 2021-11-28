import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/type";

it('Handles action of type SAVE_COMMENT', () => {
    const action1 = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([], action1);

    expect(newState).toEqual(['New Comment']);
})

it('Handles action with unknown type', () => {

    const newState = commentsReducer([], {type: 'regverre'});
    expect(newState).toEqual([]);
})