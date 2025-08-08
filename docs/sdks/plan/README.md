# Plan
(*plan*)

## Overview

### Available Operations

* [getPlanByIDS](#getplanbyids) - Find plan by ID
* [deletePlan](#deleteplan) - Deletes a plan

## getPlanByIDS

Returns a single plan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPlanByIDS" method="get" path="/plan/{planId}" -->
```typescript
import { Petstore } from "meep-moop";

const petstore = new Petstore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await petstore.plan.getPlanByIDS({
    planId: 722072,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "meep-moop/core.js";
import { planGetPlanByIDS } from "meep-moop/funcs/planGetPlanByIDS.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await planGetPlanByIDS(petstore, {
    planId: 722072,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("planGetPlanByIDS failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPlanByIDSRequest](../../models/operations/getplanbyidsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## deletePlan

Deletes a plan

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deletePlan" method="delete" path="/plan/{planId}" -->
```typescript
import { Petstore } from "meep-moop";

const petstore = new Petstore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await petstore.plan.deletePlan({
    planId: 633105,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "meep-moop/core.js";
import { planDeletePlan } from "meep-moop/funcs/planDeletePlan.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const res = await planDeletePlan(petstore, {
    planId: 633105,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("planDeletePlan failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeletePlanRequest](../../models/operations/deleteplanrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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