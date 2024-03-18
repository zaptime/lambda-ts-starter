import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export interface Context extends APIGatewayProxyResult {}
export interface Event extends APIGatewayProxyEvent {}

export type Status = 200 | 400 | 401 | 403 | 404 | 500;

export type Headers = {
    'Access-Control-Allow-Origin'?: string,
    'Access-Control-Allow-Credentials'?: boolean,
};

export interface CustomReturnType {
    statusCode: Status,
    headers?: Headers,
    body: string;
}

