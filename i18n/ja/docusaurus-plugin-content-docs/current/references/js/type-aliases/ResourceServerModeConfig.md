---
sidebar_label: ResourceServerModeConfig
---

# 型エイリアス: ResourceServerModeConfig

```ts
type ResourceServerModeConfig = {
  protectedResources: ResourceServerConfig | ResourceServerConfig[];
};
```

MCP サーバーをリソースサーバーモードとして構成するための設定です。

## プロパティ {#properties}

### protectedResources {#protectedresources}

```ts
protectedResources: ResourceServerConfig | ResourceServerConfig[];
```

単一のリソースサーバー設定、またはその配列です。
