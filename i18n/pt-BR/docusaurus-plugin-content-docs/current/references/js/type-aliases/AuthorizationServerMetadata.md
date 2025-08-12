---
sidebar_label: AuthorizationServerMetadata
---

# Alias de Tipo: AuthorizationServerMetadata

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

Esquema para os metadados do servidor de autorização OAuth 2.0 conforme definido na RFC 8414.

## Declaração do tipo {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

URL do endpoint de autorização do servidor de autorização [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Isto é OBRIGATÓRIO, a menos que nenhum tipo de concessão seja suportado que utilize o endpoint de autorização.

#### Veja {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

Array JSON contendo uma lista de métodos de desafio de código Proof Key for Code Exchange (PKCE)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] suportados por este servidor de autorização.

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

Array JSON contendo uma lista dos valores de tipo de concessão OAuth 2.0 que este servidor de autorização
suporta. Os valores do array usados são os mesmos usados com o parâmetro `grant_types`
definido pelo "OAuth 2.0 Dynamic Client Registration Protocol" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].
Se omitido, o valor padrão é `["authorization_code", "implicit"]`.

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

URL do endpoint de introspecção OAuth 2.0 do servidor de autorização
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

O identificador do emissor (Issuer) do servidor de autorização, que é uma URL que utiliza o esquema `https` e
não possui componentes de consulta ou fragmento.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

URL do documento JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)]
do servidor de autorização. O documento referenciado contém a(s) chave(s) de assinatura que o cliente usa para validar
assinaturas do servidor de autorização. Esta URL DEVE usar o esquema `https`.

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

URL do endpoint de Registro Dinâmico de Cliente OAuth 2.0 do servidor de autorização
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

Array JSON contendo uma lista dos valores de `response_mode` do OAuth 2.0 que este
servidor de autorização suporta, conforme especificado em "OAuth 2.0 Multiple Response
Type Encoding Practices"
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)].

Se omitido, o padrão é `["query", "fragment"]`. O valor de response mode `"form_post"` também é
definido em "OAuth 2.0 Form Post Response Mode"
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)].

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

Array JSON contendo uma lista dos valores de `response_type` do OAuth 2.0 que este servidor de autorização
suporta. Os valores do array usados são os mesmos usados com o parâmetro `response_types`
definido pelo "OAuth 2.0 Dynamic Client Registration Protocol"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

URL do endpoint de revogação OAuth 2.0 do servidor de autorização
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

Array JSON contendo uma lista dos valores de `scope` do OAuth 2.0 que este servidor de autorização
suporta.
[[RFC8414](https://datatracker.ietf.org/doc/html/rfc8414#section-2)]

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

URL do endpoint de token do servidor de autorização [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
Isto é OBRIGATÓRIO, a menos que apenas o tipo de concessão implícita seja suportado.

#### Veja {#see}

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

URL do [userinfo endpoint](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) do OpenID Connect.
Este endpoint é usado para recuperar informações sobre o usuário autenticado.

## Veja também {#see}

https://datatracker.ietf.org/doc/html/rfc8414