import { TheaterSystem } from '../../services';
import { createAction } from './';
import { FETCH_DATA_LIST_THEARTERSYSTEM, FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM, FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM, SET_DATA_LIST_MOVIE_WITH_THEATER } from './type';
export const GetAllTheaterSystem = (callback) => {
    return dispatch => {
        TheaterSystem.getAllTheaterSystem().then(res => {
            // console.log(res);
            dispatch(createAction(FETCH_DATA_LIST_THEARTERSYSTEM, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getALLGroupTheatherWithIdTheatherSystem = (idTheaterSystem, callback) => {
    return dispatch => {
        TheaterSystem.getALLGroupTheatherWithIdTheatherSystem(idTheaterSystem).then(res => {
            // console.log(res.data);
            dispatch(createAction(FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getALLInfoFollowTheaterSystem = (idTheaterSystem, callback) => {
    return dispatch => {
        TheaterSystem.getALLInfoFollowTheaterSystem(idTheaterSystem).then(res => {
            // console.log(res.data);
            dispatch(createAction(FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM, res.data[0]));
            // console.log(res.data[0].lstCumRap[0].danhSachPhim);
            dispatch(createAction(SET_DATA_LIST_MOVIE_WITH_THEATER, res.data[0].lstCumRap[0].danhSachPhim));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
