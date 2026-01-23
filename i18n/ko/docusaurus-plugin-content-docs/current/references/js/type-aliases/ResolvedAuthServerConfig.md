---
sidebar_label: ResolvedAuthServerConfig
---

# 타입 별칭: ResolvedAuthServerConfig

```ts
type ResolvedAuthServerConfig = {
  metadata: CamelCaseAuthorizationServerMetadata;
  type: AuthServerType;
};
```

메타데이터와 함께 원격 인가 서버 (Authorization Server)의 해석된 (resolved) 구성입니다.

이 메타데이터가 이미 하드코딩되어 있거나, 사전에 `fetchServerConfig()`를 통해 가져온 경우에 사용하세요.

## 속성(Properties) {#properties}

### metadata {#metadata}

```ts
metadata: CamelCaseAuthorizationServerMetadata;
```

인가 서버 (Authorization Server)의 메타데이터로, MCP 명세 (OAuth 2.0 인가 서버 메타데이터 기반)를 준수해야 합니다.

이 메타데이터는 일반적으로 서버의 well-known 엔드포인트 (OAuth 2.0 인가 서버 메타데이터 또는 OpenID Connect Discovery)에서 가져오며, 서버가 해당 엔드포인트를 지원하지 않는 경우 구성에 직접 제공할 수도 있습니다.

**참고:** 메타데이터는 mcp-auth 라이브러리에서 권장하는 대로 camelCase 형식이어야 합니다.

#### 참고(See) {#see}

 - [OAuth 2.0 인가 서버 메타데이터 (Authorization Server Metadata)](https://datatracker.ietf.org/doc/html/rfc8414)
 - [OpenID Connect Discovery](https://openid.net/specs/openid-connect-discovery-1_0.html)

***

### type {#type}

```ts
type: AuthServerType;
```

인가 서버 (Authorization Server)의 유형입니다.

#### 참고(See) {#see}

가능한 값은 [AuthServerType](/references/js/type-aliases/AuthServerType.md) 을 참고하세요.
