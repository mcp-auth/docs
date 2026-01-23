---
sidebar_label: AuthServerConfig
---

# 型エイリアス: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

MCP サーバーと統合されたリモート認可サーバー (Authorization server) の設定。

次のいずれかになります：
- **解決済み (Resolved)**：`metadata` を含む — ネットワークリクエストは不要
- **ディスカバリー (Discovery)**：`issuer` と `type` のみを含む — メタデータはディスカバリー経由でオンデマンド取得