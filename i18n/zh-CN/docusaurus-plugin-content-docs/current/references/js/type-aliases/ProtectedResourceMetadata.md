---
sidebar_label: ProtectedResourceMetadata
---

# 类型别名：ProtectedResourceMetadata

```ts
type ProtectedResourceMetadata = {
  authorization_details_types_supported?: string[];
  authorization_servers?: string[];
  bearer_methods_supported?: string[];
  dpop_bound_access_tokens_required?: boolean;
  dpop_signing_alg_values_supported?: string[];
  jwks_uri?: string;
  resource: string;
  resource_documentation?: string;
  resource_name?: string;
  resource_policy_uri?: string;
  resource_signing_alg_values_supported?: string[];
  resource_tos_uri?: string;
  scopes_supported?: string[];
  signed_metadata?: string;
  tls_client_certificate_bound_access_tokens?: boolean;
};
```

OAuth 2.0 受保护资源元数据的模式定义。

## 类型声明 {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

在使用 authorization_details 请求参数时支持的授权详情类型值。

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

可与此受保护资源一起使用的 OAuth 授权 (Authorization) 服务器发行者标识符列表。

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

支持的 OAuth 2.0 持有者令牌发送方式。可选值：["header", "body", "query"]。

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

该受保护资源是否始终要求 DPoP 绑定访问令牌 (Access token)。

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

用于验证 DPoP 证明 JWT 的 JWS 算法。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

受保护资源的 JSON Web Key (JWK) 集合文档的 URL。该文档包含可用于验证该受保护资源返回的响应或数据数字签名的公钥。
这与授权 (Authorization) 服务器的 jwks_uri 不同，后者用于令牌验证。当受保护资源对其响应进行签名时，客户端可以获取这些公钥以验证接收数据的真实性和完整性。

### resource {#resource}

```ts
resource: string;
```

受保护资源的资源标识符。

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

包含用于开发者使用该受保护资源的文档的 URL。

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

用于展示给终端用户的受保护资源的人类可读名称。

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

包含受保护资源数据使用要求信息的 URL。

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

受保护资源用于对资源响应进行签名所支持的 JWS 签名算法。

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

包含受保护资源服务条款的 URL。

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

在授权 (Authorization) 请求中用于访问该受保护资源的权限 (Scope) 值列表。

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

包含元数据参数作为声明 (Claim) 的已签名 JWT。该 JWT 必须使用 JWS 签名，并包含 'iss' 声明 (Claim)。此字段提供了一种加密方式来验证元数据本身的真实性。签名可通过 `jwks_uri` 端点提供的公钥进行验证。当存在时，该已签名元数据中的值优先于本元数据文档中对应的普通 JSON 值。这有助于防止资源元数据被篡改。

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

该受保护资源是否支持基于双向 TLS 客户端证书绑定的访问令牌 (Access token)。
