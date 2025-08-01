---
sidebar_label: AuthorizationServerMetadata
---

# 型別別名：AuthorizationServerMetadata

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

OAuth 2.0 授權伺服器中繼資料（Authorization Server Metadata）的結構，依據 RFC 8414 定義。

## 型別宣告 {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

授權伺服器的授權端點（authorization endpoint）URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
除非不支援任何使用授權端點的授權類型（grant types），否則此欄位為必填。

#### 參見 {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

JSON 陣列，包含此授權伺服器支援的 PKCE（Proof Key for Code Exchange）[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] code challenge 方法列表。

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

JSON 陣列，包含此授權伺服器支援的 OAuth 2.0 授權類型（grant type）值。陣列值與「OAuth 2.0 動態用戶端註冊協議」[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] 中 `grant_types` 參數所用值相同。
若省略，預設值為 `["authorization_code", "implicit"]`。

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

授權伺服器的 OAuth 2.0 introspection 端點 URL [[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)]。

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

授權伺服器的簽發者（Issuer）識別符，為一個使用 `https` 協定且無查詢或片段組件的 URL。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

授權伺服器的 JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)] 文件 URL。該文件包含用戶端用來驗證授權伺服器簽章的簽名金鑰。此 URL 必須使用 `https` 協定。

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

授權伺服器的 OAuth 2.0 動態用戶端註冊端點 URL [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)]。

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

JSON 陣列，包含此授權伺服器支援的 OAuth 2.0 `response_mode` 值，詳見「OAuth 2.0 多重回應型態編碼實踐」
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)]。

若省略，預設為 `["query", "fragment"]`。回應模式值 `"form_post"` 亦定義於「OAuth 2.0 表單回傳回應模式」
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)]。

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

JSON 陣列，包含此授權伺服器支援的 OAuth 2.0 `response_type` 值。陣列值與「OAuth 2.0 動態用戶端註冊協議」[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] 中 `response_types` 參數所用值相同。

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

授權伺服器的 OAuth 2.0 撤銷端點（revocation endpoint）URL [[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)]。

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

授權伺服器的權杖端點（token endpoint）URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
除非僅支援 implicit 授權類型，否則此欄位為必填。

#### 參見 {#see}

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

OpenID Connect [userinfo 端點](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) 的 URL。
此端點用於取得已驗證使用者的相關資訊。

## 參見 {#see}

https://datatracker.ietf.org/doc/html/rfc8414