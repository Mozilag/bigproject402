export const VALID_BOOK_LIST = {
    "type": "array",
    "items": {
        "type": "object",
        "required": [
            "id",
            "name",
            "type",
            "available"
        ],
        "properties": {
            "id": {
                "type": "integer"
            },
            "name": {
                "type": "string"
            },
            "type": {
                "type": "string"
            },
            "available": {
                "type": "boolean"
            }
        }
    }
}

export const VALID_BOOK_ID = {
    "type": "object",
    "required": [
        "id",
        "name",
        "author",
        "type",
        "price",
        "current-stock",
        "available"
    ],
    "properties": {
        "id": {
            "type": "integer"
        },
        "name": {
            "type": "string"
        },
        "author": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "price": {
            "type": "number"
        },
        "current-stock": {
            "type": "integer"
        },
        "available": {
            "type": "boolean"
        }
    }
}

export const INVALID_BOOK_LIST = {
    "type": "object",
    "required": [
        "error"
    ],
    "properties": {
        "error": {
            "type": "string"
        }
    }
}