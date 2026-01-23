---
sidebar_label: createVerifyJwt
---

# Function: createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

Creates a function to verify JWT access tokens using the provided key retrieval function
and options.

## Parameters {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

The function to retrieve the key used to verify the JWT.

**See**

JWTVerifyGetKey for the type definition of the key retrieval function.

### options? {#options}

`JWTVerifyOptions`

Optional JWT verification options.

**See**

JWTVerifyOptions for the type definition of the options.

## Returns {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

A function that verifies JWT access tokens and returns an AuthInfo object if
the token is valid. It requires the JWT to contain the fields `iss`, `client_id`, and `sub` in
its payload, and it can optionally contain `scope` or `scopes` fields. The function uses the
`jose` library under the hood to perform the JWT verification.

## See {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) for the type definition of the returned function.
