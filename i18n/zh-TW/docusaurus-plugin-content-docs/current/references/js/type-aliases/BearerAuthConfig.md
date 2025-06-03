---
sidebar_label: BearerAuthConfig
---

# 型別別名：BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## 屬性 {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

存取權杖 (Access token) 預期的受眾 (Audience)（`aud` 宣告 (claim)）。這通常是該權杖預期要存取的資源伺服器（API）。如果未提供，則會略過受眾檢查。

**注意：** 如果你的授權伺服器 (Authorization server) 不支援資源標示符 (Resource Indicators, RFC 8707)，你可以省略此欄位，因為受眾可能不適用。

#### 參考 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

存取權杖 (Access token) 預期的簽發者 (Issuer)（`iss` 宣告 (claim)）。這應該是簽發該權杖的授權伺服器 (Authorization server) 的 URL。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

存取權杖 (Access token) 必須具備的權限範圍 (Scopes) 陣列。如果權杖未包含所有這些權限範圍，將會拋出錯誤。

**注意：** 處理器會檢查權杖中的 `scope` 宣告 (claim)，其內容可能是以空格分隔的字串，或是字串陣列，這取決於授權伺服器的實作方式。如果 `scope` 宣告不存在，則會檢查 `scopes` 宣告（若有的話）。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

是否在回應中顯示詳細錯誤資訊。這對於開發期間除錯很有幫助，但在生產環境中應關閉，以避免洩漏敏感資訊。

#### 預設值 {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

用於驗證存取權杖 (Access token) 的函式型別。

此函式若權杖無效，應拋出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)；若權杖有效，則回傳 AuthInfo 物件。

#### 參考 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 以取得更多細節。
