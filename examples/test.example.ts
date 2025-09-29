import dotenv from "dotenv";
dotenv.config();
/**
 * Example usage of the meep-moop SDK
 *
 * To run this example from the examples directory:
 * npm run build && npx tsx petFindPetsByStatusTypes.ts
 */

import { Petstore } from "meep-moop";

const petstore = new Petstore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function main() {
  const result = await petstore.findPetsByStatusTypes({});

  console.log(result);
}

main().catch(console.error);
