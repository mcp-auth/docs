---
sidebar_label: AuthServerModeConfig
---

# 类型别名：~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

用于传统 MCP 服务器作为授权服务器模式的配置。

## 已废弃 {#deprecated}

请改用 `ResourceServerModeConfig` 配置。

## 属性 {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

单一授权服务器配置。

#### 已废弃 {#deprecated}

请改用 `protectedResources` 配置。
