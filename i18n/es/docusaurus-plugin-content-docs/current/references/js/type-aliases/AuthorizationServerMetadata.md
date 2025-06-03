---
sidebar_label: AuthorizationServerMetadata
---

# Alias de tipo: AuthorizationServerMetadata

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
  scope_supported?: string[];
  service_documentation?: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  ui_locales_supported?: string[];
  userinfo_endpoint?: string;
};
```

Esquema para los metadatos del servidor de autorización OAuth 2.0 según lo definido en RFC 8414.

## Declaración de tipo {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

URL del endpoint de autorización del servidor de autorización [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Esto es OBLIGATORIO a menos que no se admitan tipos de concesión que utilicen el endpoint de autorización.

#### Ver {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

Arreglo JSON que contiene una lista de métodos de desafío de código Proof Key for Code Exchange (PKCE)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] admitidos por este servidor de autorización.

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

Arreglo JSON que contiene una lista de los valores de tipo de concesión OAuth 2.0 que este servidor de autorización
admite. Los valores del arreglo son los mismos que se usan con el parámetro `grant_types`
definido por el "Protocolo de Registro Dinámico de Clientes OAuth 2.0" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].
Si se omite, el valor predeterminado es `["authorization_code", "implicit"]`.

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

URL del endpoint de introspección OAuth 2.0 del servidor de autorización
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

El identificador del emisor (Issuer) del servidor de autorización, que es una URL que utiliza el esquema `https` y
no tiene componentes de consulta ni fragmentos.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL del documento JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)]
del servidor de autorización. El documento referenciado contiene la(s) clave(s) de firma que el cliente utiliza para validar
firmas del servidor de autorización. Esta URL DEBE utilizar el esquema `https`.

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

URL del endpoint de registro dinámico de clientes OAuth 2.0 del servidor de autorización
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

Arreglo JSON que contiene una lista de los valores `response_mode` de OAuth 2.0 que este
servidor de autorización admite, según lo especificado en "Prácticas de codificación de tipo de respuesta múltiple de OAuth 2.0"
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)].

Si se omite, el valor predeterminado es `["query", "fragment"]`. El valor de modo de respuesta `"form_post"` también está
definido en "OAuth 2.0 Form Post Response Mode"
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)].

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

Arreglo JSON que contiene una lista de los valores `response_type` de OAuth 2.0 que este servidor de autorización
admite. Los valores del arreglo son los mismos que se usan con el parámetro `response_types`
definido por el "Protocolo de Registro Dinámico de Clientes OAuth 2.0"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

URL del endpoint de revocación OAuth 2.0 del servidor de autorización
[[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)].

### revocation\_endpoint\_auth\_methods\_supported? {#revocation-endpoint-auth-methods-supported}

```ts
optional revocation_endpoint_auth_methods_supported: string[];
```

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported? {#revocation-endpoint-auth-signing-alg-values-supported}

```ts
optional revocation_endpoint_auth_signing_alg_values_supported: string[];
```

### scope\_supported? {#scope-supported}

```ts
optional scope_supported: string[];
```

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

URL del endpoint de token del servidor de autorización [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Esto es OBLIGATORIO a menos que solo se admita el tipo de concesión implícita.

#### Ver {#see}

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

URL del [endpoint userinfo](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) de OpenID Connect.
Este endpoint se utiliza para recuperar información sobre el usuario autenticado.

## Ver {#see}

https://datatracker.ietf.org/doc/html/rfc8414