---
sidebar_label: AuthServerModeConfig
---

# 型エイリアス: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

レガシーの MCP サーバーを認可サーバーモードとして使用するための設定。

## 非推奨 {#deprecated}

代わりに `ResourceServerModeConfig` 設定を使用してください。

## プロパティ {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

単一の認可サーバー設定。

#### 非推奨 {#deprecated}

代わりに `protectedResources` 設定を使用してください。
