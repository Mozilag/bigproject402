import BaseAPI from "./base_simple.api";


const simplebooksAPI = {
    get_status: () => BaseAPI.get('/status'),
    get_books: () => BaseAPI.get('/books'),
    
    post_auth: (data) => BaseAPI.post('/api-clients/', data),

    submit_order: (data, token) => BaseAPI.post('/orders', data, {
        headers: {Authorization : "Bearer " + token}
    }),
}

export default simplebooksAPI;