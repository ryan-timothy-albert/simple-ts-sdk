/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { userUpdateUser } from "../../funcs/userUpdateUser.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.UpdateUserRequest$inboundSchema,
};

export const tool$userUpdateUser: ToolDefinition<typeof args> = {
  name: "user_update-user",
  description: `Update user

This can only be done by the logged in user.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await userUpdateUser(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    return formatResult(void 0, apiCall);
  },
};
