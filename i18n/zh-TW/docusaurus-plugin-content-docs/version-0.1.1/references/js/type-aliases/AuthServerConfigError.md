---
sidebar_label: AuthServerConfigError
---

# 型別別名：AuthServerConfigError (Type Alias: AuthServerConfigError)

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

表示在驗證授權伺服器中繼資料時發生的錯誤。

## 屬性 {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

錯誤的可選原因，通常為 `Error` 實例，用於提供更多背景資訊。

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

代表特定驗證錯誤的代碼。

***

### description {#description}

```ts
description: string;
```

錯誤的人類可讀描述。
