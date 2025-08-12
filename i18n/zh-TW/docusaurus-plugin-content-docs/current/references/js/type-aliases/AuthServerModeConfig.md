---
sidebar_label: AuthServerModeConfig
---

# 型別別名：~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

舊版 MCP 伺服器作為授權伺服器模式的設定。

## 已淘汰 {#deprecated}

請改用 `ResourceServerModeConfig` 設定。

## 屬性 {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

單一授權伺服器設定。

#### 已淘汰 {#deprecated}

請改用 `protectedResources` 設定。
