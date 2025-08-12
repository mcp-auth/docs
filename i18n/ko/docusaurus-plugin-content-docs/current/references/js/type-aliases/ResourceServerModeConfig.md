---
sidebar_label: ResourceServerModeConfig
---

# 타입 별칭: ResourceServerModeConfig

```ts
type ResourceServerModeConfig = {
  protectedResources: ResourceServerConfig | ResourceServerConfig[];
};
```

MCP 서버를 리소스 서버 모드로 설정하는 구성입니다.

## 속성 {#properties}

### protectedResources {#protectedresources}

```ts
protectedResources: ResourceServerConfig | ResourceServerConfig[];
```

단일 리소스 서버 구성 또는 그 배열입니다.