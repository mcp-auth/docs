---
sidebar_label: AuthServerConfigError
---

# 型エイリアス: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

認可サーバーメタデータの検証中に発生するエラーを表します。

## プロパティ {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

エラーの任意の原因。通常は、より詳細なコンテキストを提供する `Error` のインスタンスです。

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

特定の検証エラーを表すコードです。

***

### description {#description}

```ts
description: string;
```

エラーの人間が読める説明です。
