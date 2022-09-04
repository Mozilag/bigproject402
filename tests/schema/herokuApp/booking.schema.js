export const VALID_BOOKING_SCHEMA = {
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


export const VALID_BOOKING_LIST_SCHEMA = {
    "type": "array",
    "default": [],
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