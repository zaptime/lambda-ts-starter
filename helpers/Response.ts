import {Status} from "../types/lambda";

interface MakeResponse {
    statusCode: Status,
    body: Record<string, unknown> | string,
};

export function makeResponse({
    statusCode,
    body
}: MakeResponse) {
    return {
        statusCode: statusCode,
        headers: {
            'Access-Control-Allow-Origin': '*', // Required for CORS support to work
            'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
        },
        body: JSON.stringify(body, null, 2),
    };
};