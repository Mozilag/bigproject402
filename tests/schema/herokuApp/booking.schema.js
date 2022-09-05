<<<<<<< HEAD
export const VALID_CREATE_BOOKING_SCHEMA = {
=======
export const VALID_BOOKING_SCHEMA = {
>>>>>>> kristian-branch
    "type": "object",
    "properties": {
        "firstname": {
            "type": "string"
        },
        "lastname": {
            "type": "string"
        },
        "totalprice": {
            "type": "integer"
        },
        "depositpaid": {
            "type": "boolean"
        },
        "bookingdates": {
            "type": "object",
            "required": [
                "checkin",
                "checkout"
            ],
            "properties": {
                "checkin": {
                    "type": "string"
                },
                "checkout": {
                    "type": "string"
                }
            }
        },
        "additionalneeds": {
            "type": "string"
        }
    }
}

<<<<<<< HEAD
export const VALID_GET_BOOKING_SCHEMA = {
    "type": "array",
=======

export const VALID_BOOKING_LIST_SCHEMA = {
    "type": "array",
    "default": [],
>>>>>>> kristian-branch
    "items": {
        "type": "object",
        "required": [
            "bookingid"
        ],
        "properties": {
            "bookingid": {
                "type": "integer"
            }
        }
    }
}