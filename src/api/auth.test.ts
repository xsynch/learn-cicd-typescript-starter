import { describe, expect, test } from "vitest";
import { getAPIKey } from "./auth";
import { IncomingHttpHeaders } from "http";



const headersWithApiKey: IncomingHttpHeaders = {
   "authorization" : "ApiKey asdfasdfasdf",
}


const headersWithoutApiKey: IncomingHttpHeaders = {
   "authorization" : " asdfasdfasdf",
}

const headersWithoutAuthorization: IncomingHttpHeaders = {
    "content-type": " asdfasdfasdf",
}

test("Has Authorization and ApiKey",() => {
    expect(getAPIKey(headersWithApiKey)).toBe("asdfasdfasdf")
})

test(" Authorization and No ApiKey",() => {
    expect(getAPIKey(headersWithoutApiKey)).toBe("hello")
})

test(" No Authorization and No ApiKey",() => {
    expect(getAPIKey(headersWithoutAuthorization)).toBeNull()
})