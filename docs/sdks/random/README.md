# Random
(*random*)

## Overview

### Available Operations

* [getRandomPet](#getrandompet) - Get a random pet

## getRandomPet

Returns a random pet

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getRandomPet" method="get" path="/random" -->
```typescript
import { Petstore } from "meep-moop";

const petstore = new Petstore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await petstore.random.getRandomPet();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "meep-moop/core.js";
import { randomGetRandomPet } from "meep-moop/funcs/randomGetRandomPet.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await randomGetRandomPet(petstore);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("randomGetRandomPet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ApiErrorInvalidInput | 400                         | application/json            |
| errors.ApiErrorUnauthorized | 401                         | application/json            |
| errors.ApiErrorNotFound     | 404                         | application/json            |
| errors.SDKError             | 4XX, 5XX                    | \*/\*                       |