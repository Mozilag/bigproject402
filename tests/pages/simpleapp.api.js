import BaseAPI from "./s.base.api";

const simpleappAPI = {
    status_get: () => BaseAPI.get('/status'),

    books_get: () => BaseAPI.get('/books'),
    books_by_type_get: () => BaseAPI.get('/books?type=non-fiction'),
    books_by_id_get: () => BaseAPI.get('/books/3'),
    books_by_datanotfound_get: () => BaseAPI.get('/books/7'),


    auth_post: (data) => BaseAPI.post('/auth', data),

    orders_get: () => BaseAPI.get('/orders'),
    
}

export default simpleappAPI;