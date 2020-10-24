import createConnector from '.././configs/connector';
class MovieService {
    maNhom = 'GP06';
    url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim';
    getAllMovie = () => {
        return createConnector({
            method: 'GET',
            url: `${this.url}/LayDanhSachPhim?maNhom=${this.maNhom}`
        });
    };
    searchMovieWithNameMovie = (tenPhim) => {
        return createConnector({
            method: 'GET',
            url: `${this.url}/LayDanhSachPhim?maNhom=${this.MaNhom}&tenPhim=${tenPhim}`
        });
    };
    getMovieInfoWithMovieId = (maPhim) => {
        return createConnector({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        })
    };
    getPhongVeItemByMaLichChieu = (maLichChieu) => {
        return createConnector({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        })
    }
}
export default MovieService;