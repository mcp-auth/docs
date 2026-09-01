---
sidebar_label: getAuthInfo
---

# Function: getAuthInfo()

```ts
function getAuthInfo(context: BaseContext, options?: GetAuthInfoOptions): McpAuthInfo;
```

Extracts the verified [McpAuthInfo](/references/js/type-aliases/McpAuthInfo.md) from an MCP request handler context (e.g. a tool
callback's second argument), optionally enforcing per-tool scopes.

The bearer-auth middleware guarantees the auth info is present on every authenticated HTTP
request, so a missing value indicates a wiring problem — for example, the MCP endpoint is not
protected by `requireBearerAuth`, or a different token verifier than `MCPAuth` is in use.

## Parameters

### context

`BaseContext`

The request handler context provided by the MCP SDK.

### options?

[`GetAuthInfoOptions`](/references/js/type-aliases/GetAuthInfoOptions.md)

Optional per-tool authorization requirements.

## Returns

[`McpAuthInfo`](/references/js/type-aliases/McpAuthInfo.md)

The verified auth info.

## Example

```ts
import { getAuthInfo } from 'mcp-auth';

server.registerTool('whoami', { description: 'Get the current user' }, (ctx) => {
  const { subject, claims } = getAuthInfo(ctx);
  return { content: [{ type: 'text', text: JSON.stringify({ subject, claims }) }] };
});

server.registerTool('purge-notes', { description: 'Delete every note' }, (ctx) => {
  // Throws unless the token has the `notes:write` scope; the SDK surfaces the error to the
  // model as a tool error result.
  const { subject } = getAuthInfo(ctx, { requiredScopes: ['notes:write'] });
  // ...
});
```

## Throws

if the context has no auth info, the auth info was not produced by
`MCPAuth#verifyAccessToken`, or a required scope is missing.
