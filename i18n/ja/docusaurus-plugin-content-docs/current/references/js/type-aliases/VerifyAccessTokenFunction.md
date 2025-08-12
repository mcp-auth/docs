---
sidebar_label: VerifyAccessTokenFunction
---

# 型エイリアス: VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

アクセス トークン (Access token) を検証するための関数型です。

この関数は、トークンが無効な場合は [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) をスローし、有効な場合は AuthInfo オブジェクトを返す必要があります。

例えば、JWT 検証関数がある場合、少なくともトークンの署名を確認し、有効期限を検証し、必要なクレーム (Claims) を抽出して `AuthInfo` オブジェクトを返す必要があります。

**注意:** 次のフィールドについては、ハンドラー側で確認されるため、トークン内で検証する必要はありません：

- `iss`（発行者 (Issuer)）
- `aud`（オーディエンス (Audience)）
- `scope`（スコープ (Scopes)）

## パラメーター {#parameters}

### token {#token}

`string`

検証対象のアクセス トークン (Access token) 文字列。

## 戻り値 {#returns}

`MaybePromise`\<`AuthInfo`\>

トークンが有効な場合、AuthInfo オブジェクトを解決する Promise または同期値。
