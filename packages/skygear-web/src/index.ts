import { BaseAPIClient } from "@skygear/core";
export * from "@skygear/core";

const globalFetch = fetch;

export class APIClient extends BaseAPIClient {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
    return globalFetch(input, init);
  }
}