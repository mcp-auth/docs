---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# Function: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<ResolvedAuthServerConfig>;
```

Fetches the server configuration from the provided well-known URL and validates it against the
MCP specification.

If the server metadata does not conform to the expected schema, but you are sure that it is
compatible, you can define a `transpileData` function to transform the metadata into the
expected format.

## Parameters

### wellKnownUrl

The well-known URL to fetch the server configuration from. This can be a
string or a URL object.

`string` | `URL`

### config

[`ServerMetadataConfig`](/references/js/type-aliases/ServerMetadataConfig.md)

The configuration object containing the server type and optional transpile function.

## Returns

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

A promise that resolves to the resolved server configuration with fetched metadata.

## Throws

if the fetch operation fails.

## Throws

if the server metadata is invalid or does not match the
MCP specification.
