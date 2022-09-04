import chai, { assert, expect } from "chai";
import jsonSchema from 'chai-json-schema';
import simpleappAPI from "$root/pages/simpleapp.api";
import * as schema from "$root/schema/simpleApp/book.schema";

chai.use(jsonSchema)

describe('As a User, i be able to see books list', () => {
    it('Should Successfully to see books list', async() =>{
        const response = await simpleappAPI.books_get();

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_BOOK_LIST);
    })
})

describe('As a User, i be able to see books by type', () => {
    it('Should Successfully to see books by type', async() =>{
        const response = await simpleappAPI.books_by_type_get();

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_BOOK_LIST);
    })
})

describe('As a User, i be able to see books by id', () => {
    it('Should Successfully to see books by id', async() =>{
        const response = await simpleappAPI.books_by_id_get();

        assert.equal(response.status, 200);
        expect(response.data).to.be.jsonSchema(schema.VALID_BOOK_ID);
    })
})

describe('As a User, i be able to see book not found', () => {
    it('Should Successfully to see book not found', async() =>{
        const response = await simpleappAPI.books_by_datanotfound_get();

        assert.equal(response.status, 404);
        expect(response.data).to.be.jsonSchema(schema.INVALID_BOOK_LIST);
    })
})