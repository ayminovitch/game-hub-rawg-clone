import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a1b13804d2c24b91812069b84d3ce052'
    }
})