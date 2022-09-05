import BaseAPI from "./base.api";


const herokuappAPI = {
    ping_get: () => BaseAPI.get('/ping'),

    auth_post: (data) => BaseAPI.post('/auth', data),
    
    booking_post: (data) => BaseAPI.post('/booking', data),
    booking_get: () => BaseAPI.get('/booking'),

    update_booking: (data, token) => BaseAPI.patch('/booking/21', data, {
        headers: {
            'cookie': 'token='+token
        }
    }),
}

export default herokuappAPI;