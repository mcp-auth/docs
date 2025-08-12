---
sidebar_label: handleBearerAuth
---

# 関数: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Express アプリケーションで Bearer 認証 (Bearer auth) を処理するためのミドルウェア関数を作成します。

このミドルウェアは、`Authorization` ヘッダーから Bearer トークンを抽出し、指定された `verifyAccessToken` 関数を使用して検証し、発行者、オーディエンス、必要なスコープをチェックします。

- トークンが有効な場合、認証情報を `request.auth` プロパティに追加します。有効でない場合は、適切なエラーメッセージで応答します。
- アクセス トークン (Access token) の検証に失敗した場合、401 Unauthorized エラーで応答します。
- トークンに必要なスコープ (Scope) が含まれていない場合、403 Forbidden エラーで応答します。
- 認証 (Authentication) プロセス中に予期しないエラーが発生した場合、ミドルウェアはそれらを再スローします。

**注意:**  `request.auth` オブジェクトには、`@modelcontextprotocol/sdk` モジュールで定義されている標準の AuthInfo インターフェースと比較して拡張されたフィールドが含まれます。詳細はこのファイル内の拡張インターフェースを参照してください。

## パラメーター {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Bearer 認証 (Bearer auth) ハンドラーの設定。

## 戻り値 {#returns}

`RequestHandler`

Bearer 認証 (Bearer auth) を処理する Express 用ミドルウェア関数。

## 参照 {#see}

設定オプションについては [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) を参照してください。
