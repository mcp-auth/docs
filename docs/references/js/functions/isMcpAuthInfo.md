---
sidebar_label: isMcpAuthInfo
---

# Function: isMcpAuthInfo()

```ts
function isMcpAuthInfo(info: AuthInfo): info is McpAuthInfo;
```

Checks whether an `AuthInfo` object carries the mcp-auth guarantees ([McpAuthInfo](/references/js/type-aliases/McpAuthInfo.md)),
i.e. it was produced by `MCPAuth#verifyAccessToken`.

## Parameters

### info

`AuthInfo`

## Returns

`info is McpAuthInfo`
