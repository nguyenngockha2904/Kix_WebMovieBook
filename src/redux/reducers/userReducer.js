import { SET_CREDENTIALS } from "../action/type";

let initialState = {
    credentials: {

    }
};

const UserReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case SET_CREDENTIALS: {
            state.credentials = payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
export default UserReducer;
