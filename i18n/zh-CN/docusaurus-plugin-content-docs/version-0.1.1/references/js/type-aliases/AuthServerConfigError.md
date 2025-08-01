---
sidebar_label: AuthServerConfigError
---

# 类型别名：AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

表示在验证授权服务器元数据时发生的错误。

## 属性 {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

错误的可选原因，通常是一个 `Error` 实例，用于提供更多上下文信息。

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

表示具体验证错误的代码。

***

### description {#description}

```ts
description: string;
```

对错误的人类可读描述。
