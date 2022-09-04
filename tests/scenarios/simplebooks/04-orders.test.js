import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simpleappAPI from "$root/pages/simpleapp.api";
import * as schema from "$root/schema/simpleApp/order.schema";

chai.use(jsonSchema);

describe('As a user I able to get order', () => {
    it.only('Should successfully get all order', async() => {
        const respone = await simpleappAPI.orders_get();

        assert.equal(respone.status, 200);

    });
});
