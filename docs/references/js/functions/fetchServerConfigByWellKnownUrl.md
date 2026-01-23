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

## Parameters {#parameters}

### wellKnownUrl {#wellknownurl}

The well-known URL to fetch the server configuration from. This can be a
string or a URL object.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

The configuration object containing the server type and optional transpile function.

## Returns {#returns}

`Promise`\<[`ResolvedAuthServerConfig`](/references/js/type-aliases/ResolvedAuthServerConfig.md)\>

A promise that resolves to the static server configuration with fetched metadata.

## Throws {#throws}

if the fetch operation fails.

## Throws {#throws}

if the server metadata is invalid or does not match the
MCP specification.
