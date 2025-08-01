---
sidebar_label: BearerAuthConfig
---

# Type Alias: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Properties {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

The expected audience of the access token (`aud` claim). This is typically the resource server
(API) that the token is intended for. If not provided, the audience check will be skipped.

**Note:** If your authorization server does not support Resource Indicators (RFC 8707),
you can omit this field since the audience may not be relevant.

#### See {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

The expected issuer of the access token (`iss` claim). This should be the URL of the
authorization server that issued the token.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

An array of required scopes that the access token must have. If the token does not contain
all of these scopes, an error will be thrown.

**Note:** The handler will check the `scope` claim in the token, which may be a space-
separated string or an array of strings, depending on the authorization server's
implementation. If the `scope` claim is not present, the handler will check the `scopes` claim
if available.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Whether to show detailed error information in the response. This is useful for debugging
during development, but should be disabled in production to avoid leaking sensitive
information.

#### Default {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

Function type for verifying an access token.

This function should throw an [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) if the token is invalid,
or return an AuthInfo object if the token is valid.

#### See {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) for more details.
