---
sidebar_label: BearerAuthConfig
---

# 型エイリアス: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## プロパティ {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

アクセス トークン (アクセス トークン) の期待されるオーディエンス (`aud` クレーム)。これは通常、トークンが意図されているリソースサーバー（API）です。指定しない場合、オーディエンスのチェックはスキップされます。

**注意:** 認可サーバーがリソースインジケーター (RFC 8707) をサポートしていない場合、このフィールドは省略できます。なぜなら、オーディエンスが関連しない場合があるためです。

#### 参照 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

アクセス トークン (アクセス トークン) の期待される発行者 (`iss` クレーム)。これはトークンを発行した認可サーバーの URL である必要があります。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

アクセス トークン (アクセス トークン) に必要なスコープ (スコープ) の配列。トークンにこれらすべてのスコープが含まれていない場合、エラーがスローされます。

**注意:** ハンドラーはトークン内の `scope` クレームをチェックします。これは認可サーバーの実装によって、スペース区切りの文字列または文字列の配列である場合があります。`scope` クレームが存在しない場合、ハンドラーは `scopes` クレームがあればそれをチェックします。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

レスポンスに詳細なエラー情報を表示するかどうか。これは開発中のデバッグに便利ですが、本番環境では機密情報漏洩を防ぐため無効にするべきです。

#### デフォルト {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

アクセス トークン (アクセス トークン) を検証するための関数型。

この関数は、トークンが無効な場合は [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) をスローし、有効な場合は AuthInfo オブジェクトを返す必要があります。

#### 参照 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) を参照してください。
