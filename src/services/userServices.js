import createConnector from '.././configs/connector';

class UserServices {
    login = (data) => {
        return createConnector({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data,
        });
    }
}
export default UserServices;