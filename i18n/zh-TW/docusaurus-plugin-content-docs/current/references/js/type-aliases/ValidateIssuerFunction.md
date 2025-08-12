---
sidebar_label: ValidateIssuerFunction
---

# 型別別名：ValidateIssuerFunction()

```ts
type ValidateIssuerFunction = (tokenIssuer: string) => void;
```

用於驗證存取權杖 (Access token) 簽發者 (Issuer) 的函式型別。

當簽發者 (Issuer) 無效時，此函式應拋出帶有 'invalid_issuer' 代碼的 [MCPAuthBearerAuthError](/references/js/classes/MCPAuthBearerAuthError.md)。簽發者應根據以下條件進行驗證：

1. MCP-Auth 的授權伺服器 (Authorization server) 中設定的授權伺服器元資料
2. 受保護資源 (Protected resource) 元資料中列出的授權伺服器

## 參數 {#parameters}

### tokenIssuer {#tokenissuer}

`string`

## 回傳值 {#returns}

`void`

## 拋出例外 {#throws}

當簽發者 (Issuer) 未被識別或無效時。
