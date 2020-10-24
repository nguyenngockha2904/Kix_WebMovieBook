import { MovieService } from '../../services';
import { createAction } from './';
import { FETCH_DATA_LIST_MOVIE, FETCH_DATA_MOVIEINFO_WITH_MOVIEID, SET_DATA_lIST_LICH_CHIEU, SET_DATA_LIST_PHONGVE_MALICHCHIEU } from './type';
export const GetAllMovie = (callback) => {
    return dispatch => {
        MovieService.getAllMovie().then(res => {
            // console.log(res.data);
            dispatch(createAction(FETCH_DATA_LIST_MOVIE, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const SearchMovieWithMovieName = (name) => {
    return dispatch => {
        MovieService.searchMovieWithNameMovie(name).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getMovieInfoWithMovieId = (movieId, callback) => {
    return dispatch => {
        MovieService.getMovieInfoWithMovieId(movieId).then(res => {
            dispatch(createAction(FETCH_DATA_MOVIEINFO_WITH_MOVIEID, res.data));
            callback();
        }).catch(err => {
            console.log(err);
        })
    }
}
export const getPhongVeItem_byMaLichChieu = (maLichChieu, callback) => {
    return dispatch => {
        MovieService.getPhongVeItemByMaLichChieu(maLichChieu).then(res => {
            // console.log(res.data);
            dispatch(createAction(SET_DATA_LIST_PHONGVE_MALICHCHIEU, res.data));
            callback(res.data.thongTinPhim.tenCumRap);
        }).catch(err => {
            console.log(err);
        });
    }
}