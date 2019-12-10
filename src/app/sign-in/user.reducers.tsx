import { UserAction, UserActionTypes } from './user.actions';

const initialState = { vcode: null };

export const users = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.GET_VCODE_SUCCESS: {
            const { vcode } = action.payload;
            return { ...state, vcode };
        }
        default: return state;
    }
};
