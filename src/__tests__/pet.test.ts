/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Petstore } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Pet Pets Store Monday", async () => {
  const testHttpClient = createTestHTTPClient("petsStoreMonday");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.petsStoreMonday({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });
});

it.skip("Pet My New Test", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step MyNewTest.test referencing operation MyNewTest not found in document`]",
  );
});

test("Pet Find Pets By Status Types", async () => {
  const testHttpClient = createTestHTTPClient("findPetsByStatusTypes");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.findPetsByStatusTypes({});
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
      ],
    },
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
      ],
    },
  ]);
});

test("Pet Find Pets By Tags", async () => {
  const testHttpClient = createTestHTTPClient("findPetsByTags");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.findPetsByTags({});
  expect(result).toBeDefined();
  expect(result).toEqual([
    {
      id: 10,
      name: "doggie",
      category: {
        id: 1,
        name: "Dogs",
      },
      photoUrls: [
        "<value>",
        "<value>",
        "<value>",
      ],
    },
  ]);
});

test("Pet Get Pet By Ids", async () => {
  const testHttpClient = createTestHTTPClient("getPetByIDS");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.getPetByIDS({
    petId: 137396,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
      "<value>",
    ],
  });
});

test("Pet Delete Pet", async () => {
  const testHttpClient = createTestHTTPClient("deletePet");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.deletePet({
    petId: 441876,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
});

test("Pet Upload File", async () => {
  const testHttpClient = createTestHTTPClient("uploadFile");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.uploadFile({
    petId: 565380,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({});
});

test("Pet Mcp", async () => {
  const testHttpClient = createTestHTTPClient("MCP");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.pet.mcp({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });
});
