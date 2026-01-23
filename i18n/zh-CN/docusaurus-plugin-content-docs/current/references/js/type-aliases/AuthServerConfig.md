---
sidebar_label: AuthServerConfig
---

# 类型别名：AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

与 MCP 服务器集成的远程授权服务器 (Authorization server) 配置。

可以是以下两种之一：
- **已解析（Resolved）**：包含 `metadata` —— 无需网络请求
- **发现（Discovery）**：仅包含 `issuer` 和 `type` —— 通过发现按需获取元数据