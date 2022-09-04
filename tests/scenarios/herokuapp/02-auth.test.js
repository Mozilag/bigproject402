import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import herokuappAPI from "$root/pages/herokuapp.api";
import * as data from "$root/data/auth.data";
import * as schema from "$root/schema/herokuApp/auth.schema";


describe ('As a guest, I want to login using valid username & password', ()=>{
    it('Should have succesfully received the token', async() => {
        const response = await herokuappAPI.auth_post(data.VALID_LOGIN);

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_AUTH_SCHEMA)
    });
});

describe ('As a guest, I want to login using invalid username', ()=>{
    it('Should display "Bad credentials"', async() => {
        const response = await herokuappAPI.auth_post(data.INVALID_USERNAME);

        assert.equal(response.status, 200);
        assert.equal(response.data.reason, "Bad credentials");
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});

describe ('As a guest, I want to login using wrong password', ()=>{
    it('Should display "Bad credentials"', async() => {
        const response = await herokuappAPI.auth_post(data.WRONG_PASSWORD);

        assert.equal(response.status, 200);
        assert.equal(response.data.reason, "Bad credentials");
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});

describe ('As a guest, I want to login using empty values', ()=>{
    it('Should display "Bad credentials"', async() => {
        const response = await herokuappAPI.auth_post();

        assert.equal(response.status, 200);
        assert.equal(response.data.reason, "Bad credentials");
        expect(response.data).to.be.jsonSchema(schema.INVALID_AUTH_SCHEMA)
    });
});