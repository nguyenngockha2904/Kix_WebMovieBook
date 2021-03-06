import createConnector from '.././configs/connector';

class UserServices {
    login = (data) => {
        return createConnector({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data,
        });
    }
    getInfoUser = (taiKhoan) => {
        return createConnector({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            data: { taiKhoan: taiKhoan }
        });
    }
    updateUser = (data) => {
        // console.log(data);
        return createConnector({
            method: 'PUT',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
            data
        });
    }
    signUp = (data) => {
        return createConnector({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data
        })
    }
}
export default UserServices;