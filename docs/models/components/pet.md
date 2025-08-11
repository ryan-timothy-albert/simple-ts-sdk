# Pet

## Example Usage

```typescript
import { Pet } from "meep-moop/models/components";

let value: Pet = {
  breed: "something random",
  name: "doggie",
  category: {
    id: 1,
    name: "Dogs",
  },
  photoUrls: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `breed`                                                    | *string*                                                   | :heavy_minus_sign:                                         | N/A                                                        | something random                                           |
| `name`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | doggie                                                     |
| `category`                                                 | [components.Category](../../models/components/category.md) | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `photoUrls`                                                | *string*[]                                                 | :heavy_check_mark:                                         | N/A                                                        |                                                            |
| `tags`                                                     | [components.Tag](../../models/components/tag.md)[]         | :heavy_minus_sign:                                         | N/A                                                        |                                                            |
| `status`                                                   | [components.Status](../../models/components/status.md)     | :heavy_minus_sign:                                         | pet status in the store                                    |                                                            |