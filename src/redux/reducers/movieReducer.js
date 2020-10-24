import { FETCH_DATA_LIST_MOVIE, FETCH_DATA_MOVIEINFO_WITH_MOVIEID, FETCH_DATA_THEATERSYSEM_INFO_WITH_ID_THEARTERSYSTEM, FIND_THEATER_SYSTEM_WITH_DATE, HIRE_MODAL_VIDEO, SET_DATA_AMOUNT_GHE, SET_DATA_LIST_DAT_GHE, SET_DATA_lIST_LICH_CHIEU, SET_DATA_LIST_MOVIE_PHAN_TRANG, SET_DATA_LIST_PHONGVE_MALICHCHIEU, SET_IS_ACTVED_GHE_ITEM, SHOW_MODAL_VIDEO } from "../action/type";

let initialState = {
    listMovie: [],
    listMoviePhanTrang: [],
    ModalVideoMovie: {
        isShow: false,
        value: {},
        role: 0,//1 carousel //2 movieItem //3 moviedetailContent
    },
    movieInfoSystem: {
        heThongRapChieu: [],
    },
    listLichChieuTheoFilmTheoMaHeThongRap: [
        {
            maHeThongRap: '',
            maCumRap: '',
            maLichChieu: '',
            ngayChieuGioChieu: '',
        }
    ],
    listCumRapTheoPhimVaHeThongRap: [

    ],
    PhongVeItemByMaLichChieu: {
        thongTinPhim: {},
        danhSachGhe: [],
    },
    listGheVip: [],
    listGheThuong: [],
    listGheDaDat: [],
    amount: {}
};

const MovieReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_DATA_LIST_MOVIE: {
            state.listMovie = payload;
            let list = payload; // list tổng từ API
            // console.log(list);  
            let listMovieDiv = []; // list sau khi phân trang
            let todosPerPage = 8; // số phần tử trong trang 
            let solan = (list.length % todosPerPage) !== 0 ? ((list.length / todosPerPage) + 1) : (list.length / todosPerPage); //số lần tạo trang trong 
            for (let i = 1; i <= solan; i++) {
                const indexOfLastTodo = i * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                const listItem = list.slice(indexOfFirstTodo, indexOfLastTodo);
                listMovieDiv = [...listMovieDiv, listItem];
            }
            state.listMoviePhanTrang = listMovieDiv;
            return { ...state }
        }
        case SET_DATA_LIST_MOVIE_PHAN_TRANG: {
            let list = state.listMovie;
            let listMovieDiv = [];
            let todosPerPage = 8;
            if (payload === 'sm') {
                todosPerPage = 3;
            } else if (payload === 'xs') {
                todosPerPage = 1;
            } else {
                todosPerPage = 8;
            }


            let solan = (list.length % todosPerPage) !== 0 ? ((list.length / todosPerPage) + 1) : (list.length / todosPerPage);
            for (let i = 1; i <= solan; i++) {
                const indexOfLastTodo = i * todosPerPage;
                const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
                const listItem = list.slice(indexOfFirstTodo, indexOfLastTodo);
                listMovieDiv = [...listMovieDiv, listItem];
            }
            state.listMoviePhanTrang = listMovieDiv;
            return { ...state }
        }
        case SHOW_MODAL_VIDEO: {
            state.ModalVideoMovie.isShow = true;
            state.ModalVideoMovie.value = payload.value;
            state.ModalVideoMovie.role = payload.role;
            return { ...state };
        }
        case HIRE_MODAL_VIDEO: {
            state.ModalVideoMovie.isShow = false;
            state.ModalVideoMovie.role = 0;
            return { ...state };
        }
        case FETCH_DATA_MOVIEINFO_WITH_MOVIEID: {
            state.movieInfoSystem = payload;
            let heThongRapChieuTam = payload.heThongRapChieu.map((item) => {
                return { ...item, isActived: false }
            });
            state.movieInfoSystem.heThongRapChieu = heThongRapChieuTam;
            return { ...state };
        }
        case SET_DATA_lIST_LICH_CHIEU: {
            let maHeThongRap = payload;
            // let maPhim = movieId;
            // console.log(state.movieInfoSystem.heThongRapChieu);

            if (maHeThongRap) {
                // let listCumRap = state.movieInfoSystem.heThongRapChieu.filter(htr => htr.maHeThongRap === maHeThongRap)[0].cumRapChieu;
                let index = state.movieInfoSystem.heThongRapChieu.findIndex(htr => htr.maHeThongRap === maHeThongRap);
                let lstHeThongRap = [...state.movieInfoSystem.heThongRapChieu];
                for (let i in lstHeThongRap) {
                    lstHeThongRap[i].isActived = false;
                }
                lstHeThongRap[index].isActived = true;
                state.movieInfoSystem.heThongRapChieu = lstHeThongRap;
                let listCumRap = [...state.movieInfoSystem.heThongRapChieu[index].cumRapChieu];

                let listLichChieuTheoFilmTheoMaHeThongRap_Tam = [];
                listCumRap.map((item) => {
                    let CumRap = item;
                    item.lichChieuPhim.map((item) => {
                        let maLichChieu = item.maLichChieu;
                        let ngayChieuGioChieu = item.ngayChieuGioChieu;
                        let LichChieuItem = { maHeThongRap, CumRap, maLichChieu, ngayChieuGioChieu };
                        listLichChieuTheoFilmTheoMaHeThongRap_Tam.push(LichChieuItem);
                    })
                })
                state.listLichChieuTheoFilmTheoMaHeThongRap = listLichChieuTheoFilmTheoMaHeThongRap_Tam;
            } else {
                state.listLichChieuTheoFilmTheoMaHeThongRap = [];
            }

            return { ...state };
        }
        case FIND_THEATER_SYSTEM_WITH_DATE: {

            if (state.listLichChieuTheoFilmTheoMaHeThongRap.length !== 0) {
                let listtam = [];
                for (let item of state.listLichChieuTheoFilmTheoMaHeThongRap) {
                    let date = new Date(item.ngayChieuGioChieu);
                    let dayString = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${(date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()}`;
                    if (dayString === payload) {
                        listtam.push(item);
                    }
                };
                let listFinal = [];
                let listCumRap = [];
                let nameTestCumRap = '';
                if (listtam.length !== 0) {
                    for (let item of listtam) {
                        if (item.CumRap.maCumRap !== nameTestCumRap) {
                            listCumRap.push({ CumRap: item.CumRap });
                        }
                        nameTestCumRap = item.CumRap.maCumRap;
                    }
                    for (let item of listCumRap) {
                        let listTGChieu = [];
                        // console.log(listtam);
                        for (let tg of listtam) {
                            if (item.CumRap.maCumRap === tg.CumRap.maCumRap) {
                                listTGChieu.push({ maLichChieu: tg.maLichChieu, ngayChieuGioChieu: tg.ngayChieuGioChieu });
                            }
                        }
                        let final = { CumRap: item.CumRap, listTGChieu };
                        listFinal.push(final);
                    }
                }

                state.listCumRapTheoPhimVaHeThongRap = listFinal;
            }

            // console.log(state.listCumRapTheoPhimVaHeThongRap);
            return { ...state };
        }
        case SET_DATA_LIST_PHONGVE_MALICHCHIEU: {

            if (payload) {
                // state.PhongVeItemByMaLichChieu = payload;
                // state.PhongVeItemByMaLichChieu.danhSachGhe
                state.PhongVeItemByMaLichChieu.thongTinPhim = payload.thongTinPhim;
                let danhSachGhetam = payload.danhSachGhe.map((item, index) => {
                    return { ...item, isActived: false }
                });
                state.PhongVeItemByMaLichChieu.danhSachGhe = danhSachGhetam;
                state.listGheThuong = state.PhongVeItemByMaLichChieu.danhSachGhe.filter(item => item.loaiGhe === "Thuong");
                state.listGheVip = state.PhongVeItemByMaLichChieu.danhSachGhe.filter(item => item.loaiGhe === "Vip");
            } else {
                state.PhongVeItemByMaLichChieu = {};
            }
            return { ...state };
        }
        case SET_IS_ACTVED_GHE_ITEM: {
            // console.log(payload.maGhe);
            let index = state.PhongVeItemByMaLichChieu.danhSachGhe.findIndex(item => item.maGhe === payload.maGhe);
            let i = state.listGheDaDat.findIndex(item => item.maGhe === payload.maGhe);
            if (index !== -1) {
                let magtam = [...state.PhongVeItemByMaLichChieu.danhSachGhe];
                magtam[index].isActived = !magtam[index].isActived;
                state.PhongVeItemByMaLichChieu = { ...state.PhongVeItemByMaLichChieu, danhSachGhe: magtam };
                if (i === -1) {
                    state.listGheDaDat = [...state.listGheDaDat, magtam[index]]
                } else {
                    let magTam = [...state.listGheDaDat];
                    magTam.splice(i, 1);
                    state.listGheDaDat = magTam;
                }

            }

            return { ...state };
        }
        case SET_DATA_AMOUNT_GHE: {
            state.amount = payload;
            return { ...state };
        }
        default: {
            return state;
        }
    }
}
export default MovieReducer;