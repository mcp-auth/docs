---
sidebar_label: createVerifyJwt
---

# 函式：createVerifyJwt()

```ts
function createVerifyJwt(getKey: JWTVerifyGetKey, options?: JWTVerifyOptions): VerifyAccessTokenFunction;
```

建立一個函式，使用提供的金鑰取得函式與選項來驗證 JWT 存取權杖 (Access token)。

## 參數 {#parameters}

### getKey {#getkey}

`JWTVerifyGetKey`

用於取得驗證 JWT 所需金鑰的函式。

**參見**

JWTVerifyGetKey 以瞭解金鑰取得函式的型別定義。

### options? {#options}

`JWTVerifyOptions`

可選的 JWT 驗證選項。

**參見**

JWTVerifyOptions 以瞭解選項的型別定義。

## 回傳值 {#returns}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

一個用於驗證 JWT 存取權杖 (Access token) 的函式，若權杖有效則回傳 AuthInfo 物件。此函式要求 JWT 的 payload 中必須包含 `iss`、`client_id` 與 `sub` 欄位，且可選擇性包含 `scope` 或 `scopes` 欄位。該函式底層使用 `jose` 函式庫進行 JWT 驗證。

## 參見 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以瞭解回傳函式的型別定義。