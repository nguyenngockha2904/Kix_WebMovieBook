import { GET_LISTHISTORY, SET_CREDENTIALS } from "../action/type";

let initialState = {
    credentials: {

    },
    listHistory: [],
};

const UserReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case SET_CREDENTIALS: {
            state.credentials = payload;
            return { ...state };
        }
        case GET_LISTHISTORY: {
            state.credentials = payload;
            state.listHistory = payload.thongTinDatVe;
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
export default UserReducer;
