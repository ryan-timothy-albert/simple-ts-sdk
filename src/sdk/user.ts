/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { userCreateUser } from "../funcs/userCreateUser.js";
import { userCreateUsersWithListInput } from "../funcs/userCreateUsersWithListInput.js";
import { userDeleteUser } from "../funcs/userDeleteUser.js";
import { userGetUserByName } from "../funcs/userGetUserByName.js";
import { userLoginUser } from "../funcs/userLoginUser.js";
import { userLogoutUser } from "../funcs/userLogoutUser.js";
import { userUpdateUser } from "../funcs/userUpdateUser.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class User extends ClientSDK {
  /**
   * Create user
   *
   * @remarks
   * This can only be done by the logged in user.
   */
  async createUser(
    request?: components.User | undefined,
    options?: RequestOptions,
  ): Promise<components.User> {
    return unwrapAsync(userCreateUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Creates list of users with given input array
   *
   * @remarks
   * Creates list of users with given input array
   */
  async createUsersWithListInput(
    request?: Array<components.User> | undefined,
    options?: RequestOptions,
  ): Promise<components.User> {
    return unwrapAsync(userCreateUsersWithListInput(
      this,
      request,
      options,
    ));
  }

  /**
   * Logs user into the system
   */
  async loginUser(
    request: operations.LoginUserRequest,
    options?: RequestOptions,
  ): Promise<operations.LoginUserResponse> {
    return unwrapAsync(userLoginUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Logs out current logged in user session
   */
  async logoutUser(
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(userLogoutUser(
      this,
      options,
    ));
  }

  /**
   * Get user by user name
   */
  async getUserByName(
    request: operations.GetUserByNameRequest,
    options?: RequestOptions,
  ): Promise<components.User> {
    return unwrapAsync(userGetUserByName(
      this,
      request,
      options,
    ));
  }

  /**
   * Update user
   *
   * @remarks
   * This can only be done by the logged in user.
   */
  async updateUser(
    request: operations.UpdateUserRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(userUpdateUser(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete user
   *
   * @remarks
   * This can only be done by the logged in user.
   */
  async deleteUser(
    request: operations.DeleteUserRequest,
    options?: RequestOptions,
  ): Promise<components.User> {
    return unwrapAsync(userDeleteUser(
      this,
      request,
      options,
    ));
  }
}
