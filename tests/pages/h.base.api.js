import dotenv from 'dotenv';
import axios from 'axios';
import querystring from 'querystring';

dotenv.config();

const BaseAPI = axios.create({
    baseURL: process.env.BASE_URL_HERO,
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

<<<<<<< HEAD
export default BaseAPI;


=======
export default BaseAPI;
>>>>>>> 99a9021ab42a0c790e6b7ad201d78a870c0518a2
