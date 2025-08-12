---
sidebar_label: fetchServerConfig
---

# 함수: fetchServerConfig()

```ts
function fetchServerConfig(issuer: string, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

발급자 (Issuer)와 인가 서버 유형에 따라 서버 구성을 가져옵니다.

이 함수는 서버 유형에 따라 well-known URL을 자동으로 결정합니다. OAuth 및 OpenID Connect 서버는 메타데이터 엔드포인트에 대해 서로 다른 규칙을 가지고 있기 때문입니다.

## 매개변수 {#parameters}

### issuer {#issuer}

`string`

인가 서버의 발급자 (Issuer) URL입니다.

### config {#config}

`ServerMetadataConfig`

서버 유형 및 선택적 트랜스파일 함수가 포함된 구성 객체입니다.

## 반환값 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

서버 구성으로 해결되는 프로미스입니다.

## 참고 {#see}

 - 기본 구현에 대해서는 [fetchServerConfigByWellKnownUrl](/references/js/functions/fetchServerConfigByWellKnownUrl.md) 을(를) 참조하세요.
 - OAuth 2.0 인가 서버 메타데이터 사양은 [https://www.rfc-editor.org/rfc/rfc8414](https://www.rfc-editor.org/rfc/rfc8414) 를 참조하세요.
 - OpenID Connect Discovery 사양은 [https://openid.net/specs/openid-connect-discovery-1\_0.html](https://openid.net/specs/openid-connect-discovery-1_0.html) 를 참조하세요.

## 예시 {#example}

```ts
import { fetchServerConfig } from 'mcp-auth';
// OAuth 서버 구성 가져오기
// 이는 `https://auth.logto.io/.well-known/oauth-authorization-server/oauth` 에서 메타데이터를 가져옵니다.
const oauthConfig = await fetchServerConfig('https://auth.logto.io/oauth', { type: 'oauth' });

// OpenID Connect 서버 구성 가져오기
// 이는 `https://auth.logto.io/oidc/.well-known/openid-configuration` 에서 메타데이터를 가져옵니다.
const oidcConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });
```

## 예외 발생 {#throws}

가져오기 작업이 실패할 경우 예외가 발생합니다.

## 예외 발생 {#throws}

서버 메타데이터가 유효하지 않거나 MCP 사양과 일치하지 않을 경우 예외가 발생합니다.
