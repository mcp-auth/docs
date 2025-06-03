---
sidebar_label: VerifyAccessTokenFunction
---

# 型別別名：VerifyAccessTokenFunction()

```ts
type VerifyAccessTokenFunction = (token: string) => MaybePromise<AuthInfo>;
```

用於驗證存取權杖 (Access token) 的函式型別。

此函式應在權杖無效時拋出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)，
若權杖有效則回傳 AuthInfo 物件。

例如，若你有一個 JWT 驗證函式，至少應檢查權杖的簽章、驗證其過期時間，並擷取必要的宣告 (Claims) 以回傳 `AuthInfo` 物件。

**注意：** 無需驗證權杖中的以下欄位，這些將由處理器自動檢查：

- `iss`（簽發者 (Issuer)）
- `aud`（受眾 (Audience)）
- `scope`（權限範圍 (Scopes)）

## 參數 {#parameters}

### token {#token}

`string`

要驗證的存取權杖 (Access token) 字串。

## 回傳值 {#returns}

`MaybePromise`\<`AuthInfo`\>

一個 Promise，若權杖有效則解析為 AuthInfo 物件，或同步回傳該物件。
