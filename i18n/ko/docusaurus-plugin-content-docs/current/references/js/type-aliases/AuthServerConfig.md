---
sidebar_label: AuthServerConfig
---

# 타입 별칭: AuthServerConfig

```ts
type AuthServerConfig = 
  | ResolvedAuthServerConfig
  | AuthServerDiscoveryConfig;
```

MCP 서버와 통합된 원격 인가 서버 (Authorization server)의 구성입니다.

다음 중 하나일 수 있습니다:
- **Resolved**: `metadata`를 포함하며, 네트워크 요청이 필요하지 않습니다
- **Discovery**: `issuer`와 `type`만 포함하며, 메타데이터는 디스커버리(Discovery)를 통해 필요 시 가져옵니다