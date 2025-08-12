---
sidebar_label: handleBearerAuth
---

# 函式：handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

建立一個用於在 Express 應用程式中處理 Bearer 驗證 (Authentication) 的中介軟體函式。

此中介軟體會從 `Authorization` 標頭中擷取 Bearer 存取權杖 (Access token)，使用提供的 `verifyAccessToken` 函式進行驗證，並檢查簽發者 (Issuer)、受眾 (Audience) 及所需權限範圍 (Scopes)。

- 如果權杖有效，會將驗證資訊加入 `request.auth` 屬性；
  若無效，則回應相應的錯誤訊息。
- 若存取權杖 (Access token) 驗證失敗，會回應 401 未授權錯誤。
- 若權杖未包含所需權限範圍 (Scopes)，會回應 403 禁止存取錯誤。
- 若驗證 (Authentication) 流程中發生非預期錯誤，中介軟體會重新拋出錯誤。

**注意：** `request.auth` 物件會包含比 `@modelcontextprotocol/sdk` 模組中定義的標準 AuthInfo 介面更多的延伸欄位。詳情請參閱本檔案中的延伸介面。

## 參數 {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Bearer 驗證 (Authentication) 處理器的設定。

## 回傳值 {#returns}

`RequestHandler`

一個處理 Bearer 驗證 (Authentication) 的 Express 中介軟體函式。

## 參見 {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 以瞭解設定選項。