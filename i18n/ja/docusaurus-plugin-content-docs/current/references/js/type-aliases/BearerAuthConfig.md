---
sidebar_label: BearerAuthConfig
---

# 型エイリアス: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## プロパティ {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

アクセス トークン (アクセス トークン) の想定されるオーディエンス (`aud` クレーム)。これは通常、トークンが意図されているリソースサーバー (API) です。指定しない場合、オーディエンスのチェックはスキップされます。

**注:** 認可サーバーがリソースインジケーター (RFC 8707) をサポートしていない場合、このフィールドは省略できます。なぜなら、オーディエンスが関連しない場合があるためです。

#### 参照 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

有効な発行者 (Issuer) を表す文字列、またはアクセス トークンの発行者を検証するための関数。

文字列が指定された場合は、直接比較のための想定される発行者値として使用されます。

関数が指定された場合は、[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) のルールに従って発行者を検証する必要があります。

#### 参照 {#see}

検証関数の詳細については [ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) を参照してください。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

アクセス トークンが持つべき必須スコープ (スコープ) の配列。トークンにこれらすべてのスコープが含まれていない場合、エラーがスローされます。

**注:** ハンドラーはトークン内の `scope` クレームをチェックします。これは認可サーバーの実装によって、スペース区切りの文字列または文字列の配列である場合があります。`scope` クレームが存在しない場合、利用可能であれば `scopes` クレームをチェックします。

***

### resource? {#resource}

```ts
optional resource: string;
```

保護されたリソースの識別子。指定された場合、ハンドラーはこのリソース用に設定された認可サーバーを使用して受信したトークンを検証します。`protectedResources` 設定とともにハンドラーを使用する場合は必須です。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

レスポンスに詳細なエラー情報を表示するかどうか。これは開発中のデバッグに役立ちますが、本番環境では機密情報漏洩を防ぐために無効にする必要があります。

#### デフォルト {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

アクセス トークンを検証するための関数型。

この関数は、トークンが無効な場合は [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) をスローし、有効な場合は AuthInfo オブジェクトを返す必要があります。

#### 参照 {#see}

詳細については [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) を参照してください。
