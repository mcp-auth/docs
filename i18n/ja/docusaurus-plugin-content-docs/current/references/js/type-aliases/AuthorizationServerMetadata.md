---
sidebar_label: AuthorizationServerMetadata
---

# 型エイリアス: AuthorizationServerMetadata

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

RFC 8414 で定義されている OAuth 2.0 認可サーバーメタデータ (Authorization Server Metadata) のスキーマです。

## 型定義 {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

認可サーバーの認可エンドポイントの URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
認可エンドポイントを使用するグラントタイプがサポートされていない場合を除き、これは必須です。

#### 参照 {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

この認可サーバーがサポートする Proof Key for Code Exchange (PKCE)
[[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] のコードチャレンジ方式のリストを含む JSON 配列です。

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

この認可サーバーがサポートする OAuth 2.0 グラントタイプ値のリストを含む JSON 配列です。配列の値は、「OAuth 2.0 Dynamic Client Registration Protocol」[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] で定義されている `grant_types` パラメーターで使用されるものと同じです。
省略された場合、デフォルト値は `["authorization_code", "implicit"]` です。

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

認可サーバーの OAuth 2.0 インスペクションエンドポイントの URL
[[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)]。

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

認可サーバーの発行者 (Issuer) 識別子であり、`https` スキームを使用し、クエリやフラグメントコンポーネントを持たない URL です。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

認可サーバーの JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)]
ドキュメントの URL。参照されるドキュメントには、クライアントが認可サーバーからの署名を検証するために使用する署名鍵が含まれています。この URL は `https` スキームを使用しなければなりません。

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

認可サーバーの OAuth 2.0 ダイナミッククライアント登録エンドポイントの URL
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)]。

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

この認可サーバーがサポートする OAuth 2.0 の `response_mode` 値のリストを含む JSON 配列です。「OAuth 2.0 Multiple Response Type Encoding Practices」
[[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)] で規定されています。

省略された場合、デフォルトは `["query", "fragment"]` です。レスポンスモード値 `"form_post"` も「OAuth 2.0 Form Post Response Mode」
[[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)] で定義されています。

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

この認可サーバーがサポートする OAuth 2.0 の `response_type` 値のリストを含む JSON 配列です。配列の値は、「OAuth 2.0 Dynamic Client Registration Protocol」
[[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)] で定義されている `response_types` パラメーターで使用されるものと同じです。

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

認可サーバーの OAuth 2.0 取り消しエンドポイントの URL
[[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)]。

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

この認可サーバーがサポートする OAuth 2.0 の `scope` 値のリストを含む JSON 配列です。
[[RFC8414](https://datatracker.ietf.org/doc/html/rfc8414#section-2)]

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

認可サーバーのトークンエンドポイントの URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)]。
暗黙的グラントタイプのみがサポートされている場合を除き、これは必須です。

#### 参照 {#see}

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

OpenID Connect の [userinfo エンドポイント](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo) の URL。
このエンドポイントは、認証済みユーザーに関する情報を取得するために使用されます。

## 参照 {#see}

https://datatracker.ietf.org/doc/html/rfc8414
