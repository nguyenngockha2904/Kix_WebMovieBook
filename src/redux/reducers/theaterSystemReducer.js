import { FETCH_DATA_LIST_THEARTERSYSTEM, FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM, FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM, SET_DATA_LIST_MOVIE_WITH_THEATER } from "../action/type";

let initialState = {
    listTheaterSystem: [],
    listTheaterWithIdTheaterSystem: [],
    theaterSystemInfo: {},
    listMovieWithTheater: []
}

const TheaterSystem = (state = initialState, { payload, type }) => {
    switch (type) {
        case FETCH_DATA_LIST_THEARTERSYSTEM: {
            return { ...state, listTheaterSystem: payload }
        }
        case FETCH_DATA_LIST_THEARTER_WITH_ID_THEARTERSYSTEM: {
            return { ...state, listTheaterWithIdTheaterSystem: payload }
        }
        case FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM: {
            return { ...state, theaterSystemInfo: payload };
        }
        case SET_DATA_LIST_MOVIE_WITH_THEATER: {
            return { ...state, listMovieWithTheater: payload };
        }
        default: {
            return state;
        }
    }
}
export default TheaterSystem;