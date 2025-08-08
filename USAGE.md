<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "meep-moop";

const petstore = new Petstore({
  apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
  const result = await petstore.pet.findPetsByStatusTypes({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->