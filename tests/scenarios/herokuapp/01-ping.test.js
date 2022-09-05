import { assert } from "chai";
import RestfulAPI from "$root/pages/herokuapp.api";
import getAuthToken from '$root/helper/herokuapp/get-auth-token.api';

describe('As a User, i be able to Ping', () => {
    it('Should Successfully Ping the API', async() =>{
        const userToken = await getAuthToken();
        const response = await RestfulAPI.ping_get();

        assert.equal(response.status, 201);
        console.log(userToken)
    })
})