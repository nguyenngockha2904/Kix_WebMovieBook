import { SET_TYPE_PAGE, SET_REQUEST_PAGE } from "../action/type";

let initalState = {
    isPage: {

        role: 1, //1 trang Home //2 là trang Detail   
    },
    request: 0,// 1 lichChieu //1.1 lichChieu Collapse  // 2 cumrap // 2.1 cumrap collapse // 3 muave 
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
        default:
            return state;
    }

};
export default ParentReducer;