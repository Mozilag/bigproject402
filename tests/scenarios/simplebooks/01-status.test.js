import { assert } from "chai";
import simpleappAPI from "$root/pages/simpleapp.api";

describe('As a User, i be able to check status', () => {
    it('Should Successfully check status', async() =>{
        const response = await simpleappAPI.status_get();
        
        assert.equal(response.status, 200);
    })
})