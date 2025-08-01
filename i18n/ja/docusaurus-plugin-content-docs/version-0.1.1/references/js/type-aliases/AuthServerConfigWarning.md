---
sidebar_label: AuthServerConfigWarning
---

# 型エイリアス: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

認可サーバーメタデータの検証中に発生する警告を表します。

## プロパティ {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

特定の検証警告を表すコードです。

***

### description {#description}

```ts
description: string;
```

警告の人間が読める説明です。
