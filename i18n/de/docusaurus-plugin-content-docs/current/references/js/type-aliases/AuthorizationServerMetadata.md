---
sidebar_label: AuthorizationServerMetadata
---

# Typalias: AuthorizationServerMetadata

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

Schema für OAuth 2.0 Authorization Server Metadata wie in RFC 8414 definiert.

## Typdeklaration {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

URL des Authorization Servers für den Authorization Endpoint [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Dies ist ERFORDERLICH, es sei denn, es werden keine Grant Types unterstützt, die den Authorization Endpoint verwenden.

#### Siehe {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

JSON-Array mit einer Liste der Proof Key for Code Exchange (PKCE)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] Code-Challenge-Methoden, die von diesem Authorization Server unterstützt werden.

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

JSON-Array mit einer Liste der OAuth 2.0 Grant Type-Werte, die dieser Authorization Server unterstützt.
Die Array-Werte entsprechen denen, die mit dem `grant_types`-Parameter verwendet werden,
wie im "OAuth 2.0 Dynamic Client Registration Protocol" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] definiert.
Wenn weggelassen, ist der Standardwert `["authorization_code", "implicit"]`.

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

URL des OAuth 2.0 Introspection Endpoints des Authorization Servers
[[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)].

### introspection\_endpoint\_auth\_methods\_supported? {#introspection-endpoint-auth-methods-supported}

```ts
optional introspection_endpoint_auth_methods_supported: string[];
```

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported? {#introspection-endpoint-auth-signing-alg-values-supported}

```ts
optional introspection_endpoint_auth_signing_alg_values_supported: string[];
```

### issuer {#issuer}

```ts
issuer: string;
```

Der Issuer-Identifier (Aussteller) des Authorization Servers, eine URL, die das `https`-Schema verwendet und
keine Query- oder Fragment-Komponenten enthält.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL des JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)]
Dokuments des Authorization Servers. Das referenzierte Dokument enthält die Signaturschlüssel, die der Client verwendet,
um Signaturen des Authorization Servers zu validieren. Diese URL MUSS das `https`-Schema verwenden.

### op\_policy\_uri? {#op-policy-uri}

```ts
optional op_policy_uri: string;
```

### op\_tos\_uri? {#op-tos-uri}

```ts
optional op_tos_uri: string;
```

### registration\_endpoint? {#registration-endpoint}

```ts
optional registration_endpoint: string;
```

URL des OAuth 2.0 Dynamic Client Registration Endpoints des Authorization Servers
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

JSON-Array mit einer Liste der OAuth 2.0 `response_mode`-Werte, die dieser Authorization Server unterstützt,
wie in "OAuth 2.0 Multiple Response Type Encoding Practices" spezifiziert
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)].

Wenn weggelassen, ist der Standardwert `["query", "fragment"]`. Der Response Mode-Wert `"form_post"` ist
ebenfalls in "OAuth 2.0 Form Post Response Mode" definiert
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)].

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

JSON-Array mit einer Liste der OAuth 2.0 `response_type`-Werte, die dieser Authorization Server unterstützt.
Die Array-Werte entsprechen denen, die mit dem `response_types`-Parameter verwendet werden,
wie im "OAuth 2.0 Dynamic Client Registration Protocol"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] definiert.

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

URL des OAuth 2.0 Revocation Endpoints des Authorization Servers
[[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)].

### revocation\_endpoint\_auth\_methods\_supported? {#revocation-endpoint-auth-methods-supported}

```ts
optional revocation_endpoint_auth_methods_supported: string[];
```

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported? {#revocation-endpoint-auth-signing-alg-values-supported}

```ts
optional revocation_endpoint_auth_signing_alg_values_supported: string[];
```

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

JSON-Array mit einer Liste der OAuth 2.0 `scope`-Werte, die dieser Authorization Server unterstützt.
[[RFC8414](https://datatracker.ietf.org/doc/html/rfc8414#section-2)]

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

URL des Token Endpoints des Authorization Servers [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Dies ist ERFORDERLICH, es sei denn, nur der Implicit Grant Type wird unterstützt.

#### Siehe {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.2

### token\_endpoint\_auth\_methods\_supported? {#token-endpoint-auth-methods-supported}

```ts
optional token_endpoint_auth_methods_supported: string[];
```

### token\_endpoint\_auth\_signing\_alg\_values\_supported? {#token-endpoint-auth-signing-alg-values-supported}

```ts
optional token_endpoint_auth_signing_alg_values_supported: string[];
```

### ui\_locales\_supported? {#ui-locales-supported}

```ts
optional ui_locales_supported: string[];
```

### userinfo\_endpoint? {#userinfo-endpoint}

```ts
optional userinfo_endpoint: string;
```

URL des OpenID Connect [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo).
Dieser Endpoint wird verwendet, um Informationen über den authentifizierten Benutzer abzurufen.

## Siehe {#see}

https://datatracker.ietf.org/doc/html/rfc8414