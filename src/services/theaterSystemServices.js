import createConnector from '../configs/connector';
import { createAction } from '../redux/action';
class TheaterSystem {
    url = 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap';
    maNhom = 'GP06';
    getAllTheaterSystem = () => {
        return createConnector({
            method: "get",
            url: `${this.url}/LayThongTinHeThongRap`,
        });
    };
    getALLGroupTheatherWithIdTheatherSystem = (idTheather) => {
        return createConnector({
            method: "get",
            url: `${this.url}/LayThongTinCumRapTheoHeThong?maHeThongRap=${idTheather}`,
        });
    };
    getALLInfoFollowTheaterSystem = (idTheater) => {
        return createConnector({
            method: 'get',
            url: `${this.url}/LayThongTinLichChieuHeThongRap?maHeThongRap=${idTheater}&maNhom=${this.maNhom}`
        });
    }
}
export default TheaterSystem;