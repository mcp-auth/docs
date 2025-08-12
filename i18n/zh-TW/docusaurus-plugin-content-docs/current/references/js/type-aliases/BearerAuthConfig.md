---
sidebar_label: BearerAuthConfig
---

# 型別別名：BearerAuthConfig (Type Alias: BearerAuthConfig)

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

## 屬性 (Properties) {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

存取權杖 (Access token) 預期的受眾 (Audience)（`aud` 宣告 (claim)）。這通常是該權杖預期要存取的資源伺服器（API）。如果未提供，將略過受眾檢查。

**注意：** 如果你的授權伺服器不支援資源標示符 (Resource Indicators, RFC 8707)，可以省略此欄位，因為受眾可能不適用。

#### 參考 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

代表有效簽發者 (Issuer) 的字串，或用於驗證存取權杖 (Access token) 簽發者的函式。

如果提供字串，將作為預期的簽發者值進行直接比對。

如果提供函式，應依據 [ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) 的規則驗證簽發者。

#### 參考 {#see}

更多驗證函式細節請見 [ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md)。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

存取權杖 (Access token) 必須具備的權限範圍 (Scopes) 陣列。如果權杖未包含所有這些權限範圍，將拋出錯誤。

**注意：** 處理器會檢查權杖中的 `scope` 宣告 (claim)，其內容可能為以空格分隔的字串或字串陣列，取決於授權伺服器的實作方式。如果 `scope` 宣告不存在，則會檢查 `scopes` 宣告（若有）。

***

### resource? {#resource}

```ts
optional resource: string;
```

受保護資源的識別符。若提供此欄位，處理器將使用針對該資源所設定的授權伺服器來驗證收到的權杖。當與 `protectedResources` 設定搭配使用時，此欄位為必填。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

是否在回應中顯示詳細錯誤資訊。這對於開發階段除錯很有幫助，但在生產環境中應關閉，以避免洩漏敏感資訊。

#### 預設值 (Default) {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

用於驗證存取權杖 (Access token) 的函式型別。

此函式若權杖無效應拋出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)，若權杖有效則回傳 AuthInfo 物件。

#### 參考 {#see}

更多細節請見 [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md)。
