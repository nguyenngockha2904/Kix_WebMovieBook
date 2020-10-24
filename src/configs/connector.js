import Axios from 'axios';

const createConnector = () => {
    const config = {};
    const token = localStorage.getItem('accessToken');
    if (token) {
        config.headers = {
            Authorization: 'Bearer ' + token
        };
    }
    return Axios.create(config);
}

export default createConnector();