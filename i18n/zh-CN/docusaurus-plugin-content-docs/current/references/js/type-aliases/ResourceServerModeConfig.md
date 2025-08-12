---
sidebar_label: ResourceServerModeConfig
---

# 类型别名：ResourceServerModeConfig

```ts
type ResourceServerModeConfig = {
  protectedResources: ResourceServerConfig | ResourceServerConfig[];
};
```

MCP 服务器作为资源服务器模式的配置。

## 属性 {#properties}

### protectedResources {#protectedresources}

```ts
protectedResources: ResourceServerConfig | ResourceServerConfig[];
```

单个资源服务器配置或其数组。