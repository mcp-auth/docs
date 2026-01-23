---
sidebar_label: ResourceServerModeConfig
---

# 型別別名：ResourceServerModeConfig

```ts
type ResourceServerModeConfig = {
  protectedResources: ResourceServerConfig | ResourceServerConfig[];
};
```

MCP 伺服器作為資源伺服器模式的設定。

## 屬性 {#properties}

### protectedResources {#protectedresources}

```ts
protectedResources: ResourceServerConfig | ResourceServerConfig[];
```

單一資源伺服器設定或其陣列。