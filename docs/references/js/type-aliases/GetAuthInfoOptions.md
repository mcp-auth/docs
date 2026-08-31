---
sidebar_label: GetAuthInfoOptions
---

# Type Alias: GetAuthInfoOptions

```ts
type GetAuthInfoOptions = {
  requiredScopes?: string[];
};
```

## Properties

### requiredScopes?

```ts
optional requiredScopes: string[];
```

Scopes the access token must include, for per-tool authorization on top of the
endpoint-level `requiredScopes` of the SDK's `requireBearerAuth`.

When any are missing, an [MCPAuthError](/references/js/classes/MCPAuthError.md) with code `'missing_required_scopes'` is
thrown. The MCP SDK converts errors thrown in tool callbacks into tool error results
(`isError: true`), so the model receives a graceful `insufficient_scope: ...` refusal
instead of a failed request.
