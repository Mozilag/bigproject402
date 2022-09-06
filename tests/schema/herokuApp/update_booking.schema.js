export const VALID_UPDATE_SCHEMA = 
    {
        "type": "object",
        "default": {},
        "title": "Root Schema",
        "required": [
            "firstname",
            "lastname",
            "totalprice",
            "depositpaid",
            "bookingdates",
            "additionalneeds"
        ],
        "properties": {
            "firstname": {
                "type": "string",
                "default": "",
                "title": "The firstname Schema",
                "examples": [
                    "James"
                ]
            },
            "lastname": {
                "type": "string",
                "default": "",
                "title": "The lastname Schema",
                "examples": [
                    "Brown"
                ]
            },
            "totalprice": {
                "type": "integer",
                "default": 0,
                "title": "The totalprice Schema",
                "examples": [
                    111
                ]
            },
            "depositpaid": {
                "type": "boolean",
                "default": false,
                "title": "The depositpaid Schema",
                "examples": [
                    true
                ]
            },
            "bookingdates": {
                "type": "object",
                "default": {},
                "title": "The bookingdates Schema",
                "required": [
                    "checkin",
                    "checkout"
                ],
                "properties": {
                    "checkin": {
                        "type": "string",
                        "default": "",
                        "title": "The checkin Schema",
                        "examples": [
                            "2018-01-01"
                        ]
                    },
                    "checkout": {
                        "type": "string",
                        "default": "",
                        "title": "The checkout Schema",
                        "examples": [
                            "2019-01-01"
                        ]
                    }
                }
            },
            "additionalneeds": {
                "type": "string",
                "default": "",
                "title": "The additionalneeds Schema"
            }
        },
    }
