/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petGetPetByIDS } from "../../funcs/petGetPetByIDS.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetPetByIDSRequest$inboundSchema,
};

export const tool$petGetPetByIDS: ToolDefinition<typeof args> = {
  name: "pet-get-pet-by-IDS",
  description: `Find pet by ID

Returns a single pet`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await petGetPetByIDS(
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

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
