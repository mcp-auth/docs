---
sidebar_label: AuthServerModeConfig
---

# 타입 별칭: ~~AuthServerModeConfig~~

```ts
type AuthServerModeConfig = {
  server: AuthServerConfig;
};
```

레거시, MCP 서버를 인가 서버 모드로 사용하는 구성입니다.

## 사용 중단됨 {#deprecated}

대신 `ResourceServerModeConfig` 구성을 사용하세요.

## 속성 {#properties}

### ~~server~~ {#server}

```ts
server: AuthServerConfig;
```

단일 인가 서버 구성입니다.

#### 사용 중단됨 {#deprecated}

대신 `protectedResources` 구성을 사용하세요.
