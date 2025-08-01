---
sidebar_label: AuthorizationServerMetadata
---

# Type Alias: AuthorizationServerMetadata

```ts
type AuthorizationServerMetadata = {
  authorization_endpoint: string;
  code_challenge_methods_supported?: string[];
  grant_types_supported?: string[];
  introspection_endpoint?: string;
  introspection_endpoint_auth_methods_supported?: string[];
  introspection_endpoint_auth_signing_alg_values_supported?: string[];
  issuer: string;
  jwks_uri?: string;
  op_policy_uri?: string;
  op_tos_uri?: string;
  registration_endpoint?: string;
  response_modes_supported?: string[];
  response_types_supported: string[];
  revocation_endpoint?: string;
  revocation_endpoint_auth_methods_supported?: string[];
  revocation_endpoint_auth_signing_alg_values_supported?: string[];
  scopes_supported?: string[];
  service_documentation?: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  ui_locales_supported?: string[];
  userinfo_endpoint?: string;
};
```

Schema for OAuth 2.0 Authorization Server Metadata as defined in RFC 8414.

## Type declaration

### authorization\_endpoint

```ts
authorization_endpoint: string;
```

URL of the authorization server's authorization endpoint [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
This is REQUIRED unless no grant types are supported that use the authorization endpoint.

#### See

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported?

```ts
optional code_challenge_methods_supported: string[];
```

JSON array containing a list of Proof Key for Code Exchange (PKCE)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] code challenge methods supported by this
authorization server.

### grant\_types\_supported?

```ts
optional grant_types_supported: string[];
```

JSON array containing a list of the OAuth 2.0 grant type values that this authorization server
supports. The array values used are the same as those used with the `grant_types` parameter
defined by "OAuth 2.0 Dynamic Client Registration Protocol" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].
If omitted, the default value is `["authorization_code", "implicit"]`.

### introspection\_endpoint?

```ts
optional introspection_endpoint: string;
```

URL of the authorization server's OAuth 2.0 introspection endpoint
[[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)].

### introspection\_endpoint\_auth\_methods\_supported?

```ts
optional introspection_endpoint_auth_methods_supported: string[];
```

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported?

```ts
optional introspection_endpoint_auth_signing_alg_values_supported: string[];
```

### issuer

```ts
issuer: string;
```

The authorization server's issuer identifier, which is a URL that uses the `https` scheme and
has no query or fragment components.

### jwks\_uri?

```ts
optional jwks_uri: string;
```

URL of the authorization server's JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)]
document. The referenced document contains the signing key(s) the client uses to validate
signatures from the authorization server. This URL MUST use the `https` scheme.

### op\_policy\_uri?

```ts
optional op_policy_uri: string;
```

### op\_tos\_uri?

```ts
optional op_tos_uri: string;
```

### registration\_endpoint?

```ts
optional registration_endpoint: string;
```

URL of the authorization server's OAuth 2.0 Dynamic Client Registration endpoint
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported?

```ts
optional response_modes_supported: string[];
```

JSON array containing a list of the OAuth 2.0 `response_mode` values that this
authorization server supports, as specified in "OAuth 2.0 Multiple Response
Type Encoding Practices"
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)].

If omitted, the default is `["query", "fragment"]`. The response mode value `"form_post"` is
also defined in "OAuth 2.0 Form Post Response Mode"
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)].

### response\_types\_supported

```ts
response_types_supported: string[];
```

JSON array containing a list of the OAuth 2.0 `response_type` values that this authorization
server supports. The array values used are the same as those used with the `response_types`
parameter defined by "OAuth 2.0 Dynamic Client Registration Protocol"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### revocation\_endpoint?

```ts
optional revocation_endpoint: string;
```

URL of the authorization server's OAuth 2.0 revocation endpoint
[[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)].

### revocation\_endpoint\_auth\_methods\_supported?

```ts
optional revocation_endpoint_auth_methods_supported: string[];
```

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported?

```ts
optional revocation_endpoint_auth_signing_alg_values_supported: string[];
```

### scopes\_supported?

```ts
optional scopes_supported: string[];
```

JSON array containing a list of the OAuth 2.0 `scope` values that this authorization server
supports.
[[RFC8414](https://datatracker.ietf.org/doc/html/rfc8414#section-2)]

### service\_documentation?

```ts
optional service_documentation: string;
```

### token\_endpoint

```ts
token_endpoint: string;
```

URL of the authorization server's token endpoint [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
This is REQUIRED unless only the implicit grant type is supported.

#### See

https://rfc-editor.org/rfc/rfc6749#section-3.2

### token\_endpoint\_auth\_methods\_supported?

```ts
optional token_endpoint_auth_methods_supported: string[];
```

### token\_endpoint\_auth\_signing\_alg\_values\_supported?

```ts
optional token_endpoint_auth_signing_alg_values_supported: string[];
```

### ui\_locales\_supported?

```ts
optional ui_locales_supported: string[];
```

### userinfo\_endpoint?

```ts
optional userinfo_endpoint: string;
```

URL of the OpenID Connect [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
This endpoint is used to retrieve information about the authenticated user.

## See

https://datatracker.ietf.org/doc/html/rfc8414
