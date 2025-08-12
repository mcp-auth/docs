---
sidebar_label: AuthServerConfigWarning
---

# 类型别名：AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

表示在验证授权服务器元数据期间发生的警告。

## 属性 {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

表示特定验证警告的代码。

***

### description {#description}

```ts
description: string;
```

对警告的人类可读描述。
