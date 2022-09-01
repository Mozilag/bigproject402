import { assert } from "chai";
import RestfulAPI from "$root/pages/herokuapp.api";

describe('As a User, i be able to Ping', () => {
    it('Should Successfully Ping the API', async() =>{
        const response = await RestfulAPI.ping_get();
        assert.equal(response.status, 201);
    })
})