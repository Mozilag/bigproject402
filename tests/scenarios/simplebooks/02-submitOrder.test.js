import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simplebooksAPI from "$root/pages/simplebooks.api";
import * as data from "$root/data/sim_create_order.data";
import getUserToken from '$root/helper/simplebooks/get-auth-token.api';
// import * as schema from "$root/schema/auth.schema";

chai.use(jsonSchema)

describe.only ('As a guest, I want to submit an order', ()=>{
    it('Should have succesfully submit the order', async() => {
        // const userToken = 'b74eeba0b0acb3172397ac8fbbac7a669925d3b8a577b1c79878da6c57d43462';
        const userToken = await getUserToken();

        const response = await simplebooksAPI.submit_order(data.VALID_CREATE_ORDER, userToken);

        // assert.equal(response.status, 201);
        console.log(response.data)
    });
});

describe.only ('As a guest, Ensure submitted order with valid books id', ()=>{
    it('Should have display "Invalid or missing bookId."', async() => {
        const userToken = 'b74eeba0b0acb3172397ac8fbbac7a669925d3b8a577b1c79878da6c57d43462';
        // const userToken = await getUserToken();

        const response = await simplebooksAPI.submit_order(data.VALID_CREATE_ORDER, userToken);

        assert.equal(response.status, 400);
        assert.equal(response.data.reason, "Invalid or missing bookId.");
        console.log(response.data)
    });
});

describe.only ('As a guest, Ensure user must fill the body params', ()=>{
    it('Should have display "Invalid or missing bookId."', async() => {
        const userToken = 'b74eeba0b0acb3172397ac8fbbac7a669925d3b8a577b1c79878da6c57d43462';
        // const userToken = await getUserToken();

        const response = await simplebooksAPI.submit_order(data.VALID_CREATE_ORDER, userToken);

        assert.equal(response.status, 400);
        assert.equal(response.data.reason, "Invalid or missing bookId.");
        console.log(response.data)
    });
});