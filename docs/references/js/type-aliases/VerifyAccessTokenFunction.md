---
sidebar_label: VerifyAccessTokenFunction
---

# Type Alias: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

Function type for verifying an access token.

This function should throw an [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) if the token is invalid,
or return an AuthInfo object if the token is valid.

For example, if you have a JWT verification function, it should at least check the token's
signature, validate its expiration, and extract the necessary claims to return an `AuthInfo`
object.

**Note:** There's no need to verify the following fields in the token, as they will be checked
by the handler:

- `iss` (issuer)
- `aud` (audience)
- `scope` (scopes)

## Parameters

### token

`string`

The access token string to verify.

## Returns

`MaybePromise`\<`AuthInfo`\>

A promise that resolves to an AuthInfo object or a synchronous value if the
token is valid.
