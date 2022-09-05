import BaseAPI from "./h.base.api";


const herokuappAPI = {
    ping_get: () => BaseAPI.get('/ping'),

    auth_post: (data) => BaseAPI.post('/auth', data),
    
    booking_post: (data) => BaseAPI.post('/booking', data),
    booking_get: () => BaseAPI.get('/booking'),


    booking_get_id: () => BaseAPI.get('/booking/125'),
    booking_get_fullname: () => BaseAPI.get('/booking?firstname=sally&lastname=brown'),
    booking_get_date: () => BaseAPI.get('/booking?checkin=2014-03-13&checkout=2014-05-21'),
    booking_get_invalid: () => BaseAPI.get('/booking/98112'),

    update_booking: (data, token) => BaseAPI.patch('/booking/21', data, {
        headers: {
            'cookie': 'token='+token
        }
    })
    
}

export default herokuappAPI;