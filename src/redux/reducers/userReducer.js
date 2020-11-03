import { GET_LISTHISTORY, SET_CREDENTIALS } from "../action/type";

let initialState = {
    credentials: {

    },
    listHistory: [],
};

const UserReducer = (state = initialState, { payload, type }) => {
    switch (type) {
        case SET_CREDENTIALS: {
            let maLoaiNguoiDung = localStorage.getItem('maLoaiNguoiDung');
            state.credentials = { ...payload, maLoaiNguoiDung };
            return { ...state };
        }
        case GET_LISTHISTORY: {
            let maLoaiNguoiDung = localStorage.getItem('maLoaiNguoiDung');
            state.credentials = { ...payload, maLoaiNguoiDung };
            state.listHistory = payload.thongTinDatVe;
            return { ...state };
        }
        default: {
            return state;
        }
    }
};
export default UserReducer;
