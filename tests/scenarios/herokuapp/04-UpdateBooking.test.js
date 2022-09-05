import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import heroappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/booking.data";
import getAuthToken from '$root/helper/herokuapp/get-auth-token';
import * as schema from "$root/schema/herokuApp/update_booking.schema";

chai.use(jsonSchema)

describe('As a guest, I want to update a booking', ()=> {
    it('Should have succesfully update the books', async() => {
        const userToken = await getAuthToken();

        const response = await heroappAPI.update_booking(data.VALID_UPDATE, userToken);

         assert.equal(response.status, 200);
         expect(response.data).to.be.jsonSchema(schema.VALID_UPDATE_SCHEMA);

        console.log(userToken)
        console.log(response.data)
    });
});

describe('As a guest, ensure i cannot update without token', ()=> {
    it('Should have display "forbidden"', async() => {

        const response = await heroappAPI.update_booking(data.VALID_UPDATE);

         assert.equal(response.status, 403);
    });
});