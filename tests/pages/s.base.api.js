import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

const BaseAPI = axios.create({
    baseURL: process.env.SIMPLE_BASE_URL,
    headers:{
        "content-type": "application/x-www-form-urlencoded",
        "accept": "application/json"
    },
    transformRequest: [
        function (x) {
            return querystring.stringify(x)
        }
    ],
    validateStatus: function () {
        return true;
    }
});

export default BaseAPI;