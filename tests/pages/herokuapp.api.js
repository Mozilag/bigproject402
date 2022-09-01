import BaseAPI from "./base.api";


const herokuappAPI = {
    ping_get: () => BaseAPI.get('/ping'),

    auth_post: (data) => BaseAPI.post('/auth', data),
    
    booking_post: (data) => BaseAPI.post('/booking', data),
    booking_get: () => BaseAPI.get('/booking'),
    // booking_detail_get: (id) => BaseAPI.get('/booking/4054')
}

export default herokuappAPI;