---
sidebar_label: ProtectedResourceMetadata
---

# 型エイリアス: ProtectedResourceMetadata

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

OAuth 2.0 保護されたリソースメタデータのスキーマです。

## 型宣言 {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

authorization_details リクエストパラメーターを使用する際にサポートされる認可詳細タイプの値。

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

この保護されたリソースで使用できる OAuth 認可サーバーの発行者識別子のリスト。

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

OAuth 2.0 ベアラートークンの送信にサポートされる方法。値: ["header", "body", "query"]。

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

この保護されたリソースが常に DPoP バインド付きアクセス トークン (アクセス トークン) を必要とするかどうか。

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

DPoP 証明 JWT の検証にサポートされる JWS アルゴリズム。

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

保護されたリソースの JSON Web Key (JWK) セットドキュメントの URL。このドキュメントには、この保護されたリソースから返されるレスポンスやデータのデジタル署名を検証するために使用できる公開鍵が含まれています。
これはトークン検証に使用される認可サーバーの jwks_uri とは異なります。保護されたリソースがレスポンスに署名する場合、クライアントはこれらの公開鍵を取得して受信データの真正性と完全性を検証できます。

### resource {#resource}

```ts
resource: string;
```

保護されたリソースのリソース識別子。

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

保護されたリソースの利用方法に関する開発者向けドキュメントの URL。

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

エンドユーザー向けに表示するための保護されたリソースの人間が読める名前。

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

保護されたリソースのデータ利用要件に関する情報を含む URL。

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

リソースレスポンスの署名に保護されたリソースがサポートする JWS 署名アルゴリズム。

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

保護されたリソースの利用規約を含む URL。

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

この保護されたリソースへアクセスするための認可リクエストで使用されるスコープ (スコープ) のリスト。

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

クレームとしてメタデータパラメーターを含む署名付き JWT。この JWT は JWS を使用して署名され、'iss' クレームを含める必要があります。このフィールドは、メタデータ自体の真正性を暗号学的に検証する方法を提供します。署名は `jwks_uri` エンドポイントで利用可能な公開鍵を使用して検証できます。
存在する場合、この署名付きメタデータ内の値は、このメタデータドキュメント内の対応するプレーン JSON 値よりも優先されます。これにより、リソースメタデータの改ざんを防ぐことができます。

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

保護されたリソースが相互 TLS クライアント証明書バインド付きアクセス トークン (アクセス トークン) をサポートするかどうか。