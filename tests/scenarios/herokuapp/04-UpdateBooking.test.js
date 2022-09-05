import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import heroappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/booking.data";
import getAuthToken from '$root/helper/herokuapp/get-auth-token.api';
// import * as schema from "$root/schema/auth.schema";

chai.use(jsonSchema)

describe.only('As a guest, I want to update a booking', ()=>{
    it('Should have succesfully update the books', async() => {
        const userToken = await getAuthToken();

        const response = await heroappAPI.update_booking(data.VALID_UPDATE, userToken);

        assert.equal(response.status, 200);

        console.log(userToken)
        console.log(response.data)
    });
});