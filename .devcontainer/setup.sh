#!/bin/bash

# Install the speakeasy CLI
curl -fsSL https://raw.githubusercontent.com/speakeasy-api/speakeasy/main/install.sh | sh

# Setup samples directory
rmdir samples || true
mkdir samples

npm install
npm install -g ts-node
npm link
npm link meep-moop
TS_CONFIG_CONTENT=$(cat <<EOL
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "openapi": ["../src/index"],
      "openapi/*": ["../src/*"]
    }
  },
  "include": ["./**/*.ts"]
}
EOL
)
echo "$TS_CONFIG_CONTENT" > samples/tsconfig.json

# Generate starter usage sample with speakeasy
speakeasy generate usage -s https://example.com/OVERWRITE_WHEN_SAMPLE_SPEC_IS_WRITTEN -l typescript -o samples/root.ts