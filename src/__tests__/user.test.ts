/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Petstore } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("User Create User", async () => {
  const testHttpClient = createTestHTTPClient("createUser");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.user.createUser({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("User Create Users With List Input", async () => {
  const testHttpClient = createTestHTTPClient("createUsersWithListInput");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.user.createUsersWithListInput([
    {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  ]);
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("User Login User", async () => {
  const testHttpClient = createTestHTTPClient("loginUser");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.user.loginUser({});
  expect(result).toBeDefined();
  expect(result.result).toBeDefined();
  expect(result.result).toEqual("<value>");
});

test("User Logout User", async () => {
  const testHttpClient = createTestHTTPClient("logoutUser");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  await petstore.user.logoutUser();
});

test("User Get User By Name", async () => {
  const testHttpClient = createTestHTTPClient("getUserByName");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.user.getUserByName({
    username: "Zachery_Lubowitz15",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});

test("User Update User", async () => {
  const testHttpClient = createTestHTTPClient("updateUser");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  await petstore.user.updateUser({
    username: "Dandre_Hand41",
    user: {
      id: 10,
      username: "theUser",
      firstName: "John",
      lastName: "James",
      email: "john@email.com",
      password: "12345",
      phone: "12345",
      userStatus: 1,
    },
  });
});

test("User Delete User", async () => {
  const testHttpClient = createTestHTTPClient("deleteUser");

  const petstore = new Petstore({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: "<YOUR_API_KEY_HERE>",
  });

  const result = await petstore.user.deleteUser({
    username: "Demetris_Schmitt",
  });
  expect(result).toBeDefined();
  expect(result).toEqual({
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  });
});
