import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import herokuappAPI from "$root/pages/herokuapp.api";
import * as schema from "$root/schema/herokuApp/booking.schema";
import * as data from '$root/data/booking.data';
chai.use(jsonSchema);

describe('As a User, I be able to acces all booking flow', () => {
    it('Should Successfully Get Booking List', async() =>{
        const response = await herokuappAPI.booking_get();
        assert.equal(response.status, 200);
    })

    
    it('Should Successfully Get Booking by ID', async() =>{
        const response = await herokuappAPI.booking_get_id();
        assert.equal(response.status, 200);
    })

    it('Should Successfully Get Booking by Fullname', async() =>{
        const response = await herokuappAPI.booking_get_fullname();
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_BOOKING_SCHEMA);
    })
    
    it('Should Successfully Get Booking by Date', async() =>{
        const response = await herokuappAPI.booking_get_date();
        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_GET_BOOKING_SCHEMA);
    })
    
    it('Should Display "Wrong ID"', async() =>{
        const response = await herokuappAPI.booking_get_invalid();
        assert.equal(response.status, 404);

    })

    it.skip('Should be successfully with valid input value', async() => {
        const response = await herokuappAPI.booking_post(data.VALID_BOOKING);

        assert.equal(response.status, 200);
        // expect(response.data).to.be.jsonSchema(schema.VALID_BOOKING_SCHEMA)
    });
    
    it.skip('Should not be success with invalid input value', async() => {
        const respone = await herokuappAPI.booking_post(data.EMPTY_BOOKING);
        
        assert.equal(respone.status, 400);
    });
});