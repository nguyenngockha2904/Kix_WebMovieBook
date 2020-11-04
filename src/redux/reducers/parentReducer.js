import { SET_TYPE_PAGE, SET_REQUEST_PAGE, SET_REQUEST_PAGE_USER, SET_REQUEST_PAGE_LOGIN } from "../action/type";

let initalState = {
    isPage: {

        role: 1, //1 trang Home //2 là trang Detail   
    },
    request: 0,// 1 lichChieu //1.1 lichChieu Collapse  // 2 cumrap // 2.1 cumrap collapse // 3 muave 
    requestPageUser: 0, //0 ko có // 1 đến tab Lịch sử
    requestPageLogin: {
        request: 0,  //0 ko co // 1 đăng nhập xog đến trang mua vé
        maLichChieu: 0,
    },
};

const ParentReducer = (state = initalState, { payload, type }) => {

    switch (type) {
        case SET_TYPE_PAGE: {
            state.isPage.role = payload;
            return { ...state };
        }
        case SET_REQUEST_PAGE: {
            state.request = payload;
            return { ...state };
        }
        case SET_REQUEST_PAGE_USER: {
            state.requestPageUser = payload;
            return { ...state };
        }
        case SET_REQUEST_PAGE_LOGIN: {
            state.requestPageLogin.request = payload.request;
            state.requestPageLogin.maLichChieu = payload.maLichChieu;
            return { ...state };
        }
        default:
            return state;
    }

};
export default ParentReducer;