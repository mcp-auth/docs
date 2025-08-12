---
sidebar_label: AuthorizationServerMetadata
---

# 类型别名：AuthorizationServerMetadata

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

OAuth 2.0 授权服务器元数据（Authorization Server Metadata）的模式，定义见 RFC 8414。

## 类型声明 {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

授权服务器的授权端点（authorization endpoint）的 URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
除非不支持任何使用授权端点的授权类型，否则这是必需的。

#### 参考 {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

包含此授权服务器支持的 Proof Key for Code Exchange (PKCE) [[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] code challenge 方法列表的 JSON 数组。

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

包含此授权服务器支持的 OAuth 2.0 授权类型（grant type）值列表的 JSON 数组。数组中的值与 "OAuth 2.0 动态客户端注册协议" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] 中 `grant_types` 参数使用的值相同。
如果省略，默认值为 `["authorization_code", "implicit"]`。

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

授权服务器的 OAuth 2.0 introspection 端点的 URL [[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)]。

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

授权服务器的发行者 (Issuer) 标识符，是一个使用 `https` 协议且没有查询或片段组件的 URL。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

授权服务器的 JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)] 文档的 URL。被引用的文档包含客户端用于验证授权服务器签名的密钥。此 URL 必须使用 `https` 协议。

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

授权服务器的 OAuth 2.0 动态客户端注册端点的 URL [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)]。

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

包含此授权服务器支持的 OAuth 2.0 `response_mode` 值列表的 JSON 数组，详见 "OAuth 2.0 多响应类型编码实践"
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)]。

如果省略，默认值为 `["query", "fragment"]`。响应模式值 `"form_post"` 也在 "OAuth 2.0 表单提交响应模式"
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)] 中定义。

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

包含此授权服务器支持的 OAuth 2.0 `response_type` 值列表的 JSON 数组。数组中的值与 "OAuth 2.0 动态客户端注册协议"
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] 中 `response_types` 参数使用的值相同。

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

授权服务器的 OAuth 2.0 撤销端点（revocation endpoint）的 URL [[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)]。

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

包含此授权服务器支持的 OAuth 2.0 `scope` 值列表的 JSON 数组。
[[RFC8414](https://datatracker.ietf.org/doc/html/rfc8414#section-2)]

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

授权服务器的令牌端点（token endpoint）的 URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
除非只支持 implicit 授权类型，否则这是必需的。

#### 参考 {#see}

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

OpenID Connect [userinfo 端点](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 的 URL。
该端点用于获取已认证用户的信息。

## 参考 {#see}

https://datatracker.ietf.org/doc/html/rfc8414