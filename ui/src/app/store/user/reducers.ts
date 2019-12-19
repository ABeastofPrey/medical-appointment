import { UserAction, UserActionTypes } from './actions';

const initialState = { vcode: null, phone: null };

export const users = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.GET_VCODE_SUCCESS: {
            const { phone, vcode } = action.payload;
            return { ...state, vcode, phone };
        }
        default: return state;
    }
};
