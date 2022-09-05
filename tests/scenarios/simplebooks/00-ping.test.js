import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simplebooksAPI from "$root/pages/simplebooks.api";
// import * as schema from "$root/schema/auth.schema";

chai.use(jsonSchema)

describe('As a guest, I want to check API Status', ()=>{
    it('Should have succesfully received the status', async() => {
        const response = await simplebooksAPI.get_status();

        assert.equal(response.status, 200);
        // expect(response.data).to.be.jsonSchema(schema.VALID_AUTH_SCHEMA)
    });
});