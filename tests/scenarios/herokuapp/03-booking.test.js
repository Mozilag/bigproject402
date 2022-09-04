import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import herokuappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/booking.data";
import * as schema from "$root/schema/herokuApp/booking.schema";
import { VALID_BOOKING } from "../../data/booking.data";


chai.use(jsonSchema)

describe('As a user I want to create booking', () => {
    it('Should be successfully with valid input value', async() => {
        const response = await herokuappAPI.booking_post(data.VALID_BOOKING);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_BOOKING_SCHEMA)
    });

    it('Should not be success with invalid input value', async() => {
        const respone = await herokuappAPI.booking_post();

        assert.equal(respone.status, 400);
    });
});

describe('As a user I want to get data booking', () => {
    it('Should be successfully get booking list', async() => {
        const respone = await herokuappAPI.booking_get();

        assert.equal(respone.status, 200);
        expect(respone.data).to.be.jsonSchema(schema.VALID_BOOKING_LIST_SCHEMA)
    });
});