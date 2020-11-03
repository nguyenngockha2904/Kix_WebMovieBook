import { createAction } from '.';
import { UserServices } from '../../services';
import { GET_LISTHISTORY, SET_CREDENTIALS } from './type';

export const Login = (data, Success, fail) => {
    return dispatch => {
        UserServices.login(data).then((res) => {
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('username', res.data.taiKhoan);
            localStorage.setItem('maLoaiNguoiDung', res.data.maLoaiNguoiDung);
            dispatch(createAction(SET_CREDENTIALS, res.data));
            Success();
        }).catch((err) => {
            console.log(err);
            fail();
        })
    }
}
export const getInfoUser = (taikhoan, Success) => {
    return dispatch => {
        UserServices.getInfoUser(taikhoan).then((res) => {
            dispatch(createAction(GET_LISTHISTORY, res.data));
            Success();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const updateUser = (data, callback, fail) => {
    return dispatch => {
        UserServices.updateUser(data).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_CREDENTIALS, res.data));
            callback();
        }).catch(err => {
            console.log(err);
            fail();
        })
    }
}