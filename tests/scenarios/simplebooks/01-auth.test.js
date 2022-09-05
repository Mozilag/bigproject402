import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simplebooksAPI from "$root/pages/simplebooks.api";
import * as data from "$root/data/sim_auth.data";

chai.use(jsonSchema)

describe.only('As a guest, I want to post auth token', ()=>{
    it('Should have succesfully received the token', async() => {
        const response = await simplebooksAPI.post_auth(data.VALID_AUTH);

        // assert.equal(response.status, 201);
        console.log(response.data)
    });
});

describe ('As a guest, Ensure cannot using invalid email', ()=>{
    it('Should display "Invalid or missing client email."', async() => {
        const response = await simplebooksAPI.post_auth(data.VALID_AUTH);

        assert.equal(response.status, 400);
        assert.equal(response.data.reason, "Invalid or missing client email.");
        // expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});

describe ('As a guest, Ensure cannot post auth with registered', ()=>{
    it('Should display "API client already registered. Try a different email."', async() => {
        const response = await simplebooksAPI.post_auth(data.VALID_AUTH);

        assert.equal(response.status, 400);
        assert.equal(response.data.reason, "API client already registered. Try a different email.");
        // expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});

describe ('As a guest, Ensure cannot post auth withoud body', ()=>{
    it('Should display "Invalid or missing client name."', async() => {
        const response = await simplebooksAPI.post_auth(data.VALID_AUTH);

        assert.equal(response.status, 400);
        assert.equal(response.data.reason, "Invalid or missing client name.");
        // expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});