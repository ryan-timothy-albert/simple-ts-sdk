<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
    apiKey: "<YOUR_API_KEY_HERE>",
});

async function run() {
    const result = await petstore.pet.updatePet({
        id: 10,
        name: "doggie",
        category: {
            id: 1,
            name: "Dogs",
        },
        photoUrls: ["<value>"],
    });

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->