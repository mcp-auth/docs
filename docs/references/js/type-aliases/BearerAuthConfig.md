---
sidebar_label: BearerAuthConfig
---

# Type Alias: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
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
issuer: 
  | string
  | ValidateIssuerFunction;
```

A string representing a valid issuer, or a function for validating the issuer of the access token.

If a string is provided, it will be used as the expected issuer value for direct comparison.

If a function is provided, it should validate the issuer according to the rules in
[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md).

#### See {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) for more details about the validation function.

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

### resource? {#resource}

```ts
optional resource: string;
```

The identifier of the protected resource. When provided, the handler will use the
authorization servers configured for this resource to validate the received token.
It's required when using the handler with a `protectedResources` configuration.

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
