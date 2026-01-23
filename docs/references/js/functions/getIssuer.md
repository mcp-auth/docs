---
sidebar_label: getIssuer
---

# Function: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

Get the issuer URL from an auth server config.

- Resolved config: extracts from `metadata.issuer`
- Discovery config: returns `issuer` directly

## Parameters {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## Returns {#returns}

`string`
