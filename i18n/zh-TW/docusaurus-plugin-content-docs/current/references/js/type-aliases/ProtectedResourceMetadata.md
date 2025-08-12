---
sidebar_label: ProtectedResourceMetadata
---

# 型別別名：ProtectedResourceMetadata

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

OAuth 2.0 受保護資源中繼資料的結構描述。

## 型別宣告 {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

在使用 authorization_details 請求參數時支援的授權細節類型值。

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

可與此受保護資源搭配使用的 OAuth 授權伺服器簽發者 (Issuer) 識別碼清單。

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

支援的 OAuth 2.0 bearer 權杖 (Access token) 傳遞方式。可選值：["header", "body", "query"]。

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

此受保護資源是否始終要求 DPoP 綁定的存取權杖 (Access token)。

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

用於驗證 DPoP 證明 JWT 的支援 JWS 演算法。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

受保護資源的 JSON Web Key (JWK) Set 文件的 URL。此文件包含可用於驗證此受保護資源回應或資料數位簽章的公鑰。這與授權伺服器的 jwks_uri 不同，後者用於權杖驗證。當受保護資源對回應進行簽章時，客戶端可透過此 URL 取得公鑰，以驗證收到資料的真實性與完整性。

### resource {#resource}

```ts
resource: string;
```

受保護資源的資源標示符 (Resource identifier)。

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

包含使用此受保護資源開發者文件的 URL。

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

用於顯示給終端使用者的人類可讀受保護資源名稱。

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

包含受保護資源資料使用需求相關資訊的 URL。

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

受保護資源用於簽署資源回應的支援 JWS 簽章演算法。

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

包含受保護資源服務條款的 URL。

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

在授權請求中用於存取此受保護資源的權限範圍 (Scope) 值清單。

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

包含中繼資料參數作為宣告 (Claim) 的已簽署 JWT。此 JWT 必須使用 JWS 簽署，並包含 'iss' 宣告。此欄位提供一種密碼學方式驗證中繼資料本身的真實性。可使用 `jwks_uri` 端點提供的公鑰驗證簽章。若存在，已簽署中繼資料中的值優先於本文件中對應的純 JSON 值，有助於防止資源中繼資料被竄改。

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

此受保護資源是否支援 mutual-TLS 用戶端憑證綁定的存取權杖 (Access token)。
