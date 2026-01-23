---
sidebar_label: AuthServerConfig
---

# 型別別名：AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

用於與 MCP 伺服器整合的遠端授權伺服器（Authorization server）設定。

可以是以下其中之一：
- **已解析（Resolved）**：包含 `metadata`，不需網路請求
- **探索（Discovery）**：僅包含 `issuer` 和 `type`，metadata 會在需要時透過探索機制取得