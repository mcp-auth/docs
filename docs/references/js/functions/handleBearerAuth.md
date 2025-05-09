---
sidebar_label: handleBearerAuth
---

# Function: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Creates a middleware function for handling Bearer auth in an Express application.

This middleware extracts the Bearer token from the `Authorization` header, verifies it using the
provided `verifyAccessToken` function, and checks the issuer, audience, and required scopes.

- If the token is valid, it adds the auth information to the `request.auth` property;
if not, it responds with an appropriate error message.
- If access token verification fails, it responds with a 401 Unauthorized error.
- If the token does not have the required scopes, it responds with a 403 Forbidden error.
- If unexpected errors occur during the auth process, the middleware will re-throw them.

**Note:**  The `request.auth` object will contain extended fields compared to the standard
AuthInfo interface defined in the `@modelcontextprotocol/sdk` module. See the extended
interface in this file for details.

## Parameters

### param0

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Configuration for the Bearer auth handler.

## Returns

`RequestHandler`

A middleware function for Express that handles Bearer auth.

## See

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) for the configuration options.
