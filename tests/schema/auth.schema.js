export const VALID_AUTH_SCHEMA = {
    "type": "object",
    "required": [
        "token"
    ],
    "properties": {
        "token": {
            "type": "string",
        }
    }
}

export const INVALID_AUTH_SCHEMA = {
    "type": "object",
    "required": [
        "reason"
    ],
    "properties": {
        "reason": {
            "type": "string",
        }
    }
}