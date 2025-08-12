---
sidebar_label: MCPAuth
---

# 클래스: MCPAuth

mcp-auth 라이브러리의 주요 클래스입니다. 보호된 리소스에 대한 인증 (Authentication) 정책을 생성하기 위한 팩토리이자 레지스트리 역할을 합니다.

서버 구성으로 초기화되며, 토큰 기반 인증 (Authentication)을 위한 Express 미들웨어를 생성하는 `bearerAuth` 메서드를 제공합니다.

## 예시 {#example}

### `리소스 서버` 모드에서의 사용 {#usage-in-resource-server-mode}

신규 애플리케이션에 권장되는 접근 방식입니다.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();

const resourceIdentifier = 'https://api.example.com/notes';
const authServerConfig = await fetchServerConfig('https://auth.logto.io/oidc', { type: 'oidc' });

const mcpAuth = new MCPAuth({
  // `protectedResources`는 단일 구성 객체 또는 객체 배열이 될 수 있습니다.
  protectedResources: [
    {
      metadata: {
        resource: resourceIdentifier,
        authorizationServers: [authServerConfig],
        scopesSupported: ['read:notes', 'write:notes'],
      },
    },
  ],
});

// 보호된 리소스 메타데이터를 처리하는 라우터를 마운트합니다.
app.use(mcpAuth.protectedResourceMetadataRouter());

// 구성된 리소스에 대한 API 엔드포인트를 보호합니다.
app.get(
  '/notes',
  mcpAuth.bearerAuth('jwt', {
    resource: resourceIdentifier, // 이 엔드포인트가 속한 리소스를 지정합니다.
    audience: resourceIdentifier, // 선택적으로 'aud' 클레임을 검증합니다.
    requiredScopes: ['read:notes'],
  }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    res.json({ notes: [] });
  },
);
```

### `인가 (Authorization) 서버` 모드의 레거시 사용법 (더 이상 권장되지 않음) {#legacy-usage-in-authorization-server-mode-deprecated}

이 방식은 하위 호환성을 위해 지원됩니다.

```ts
import express from 'express';
import { MCPAuth, fetchServerConfig } from 'mcp-auth';

const app = express();
const mcpAuth = new MCPAuth({
  server: await fetchServerConfig(
    'https://auth.logto.io/oidc',
    { type: 'oidc' }
  ),
});

// 레거시 인가 (Authorization) 서버 메타데이터를 처리하는 라우터를 마운트합니다.
app.use(mcpAuth.delegatedRouter());

// 기본 정책을 사용하여 엔드포인트를 보호합니다.
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 여기서 MCP 요청을 처리합니다.
  },
);
```

## 생성자 {#constructors}

### 생성자 {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

MCPAuth 인스턴스를 생성합니다.
전체 구성을 사전에 검증하여 오류 발생 시 빠르게 실패하도록 합니다.

#### 매개변수 {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

인증 (Authentication) 구성입니다.

#### 반환값 {#returns}

`MCPAuth`

## 속성 {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

인증 (Authentication) 구성입니다.

## 메서드 {#methods}

### bearerAuth() {#bearerauth}

#### 호출 시그니처 {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken">): RequestHandler;
```

요청의 `Authorization` 헤더에 있는 액세스 토큰 (Access token)을 검증하는 Bearer 인증 (Authentication) 핸들러 (Express 미들웨어)를 생성합니다.

##### 매개변수 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

액세스 토큰 (Access token)을 검증하는 함수입니다. 문자열로 액세스 토큰을 받아 검증 결과로 해결되는 프로미스(또는 값)를 반환해야 합니다.

**참고**

`verifyAccessToken` 함수의 타입 정의는 [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md)에서 확인하세요.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\>

Bearer 인증 (Authentication) 핸들러의 선택적 구성입니다.

**참고**

사용 가능한 구성 옵션(단, `verifyAccessToken` 및 `issuer` 제외)은 [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md)에서 확인하세요.

##### 반환값 {#returns}

`RequestHandler`

액세스 토큰 (Access token)을 검증하고 검증 결과를 요청 객체 (`req.auth`)에 추가하는 Express 미들웨어 함수입니다.

##### 참고 {#see}

구현 세부사항 및 확장된 `req.auth` (`AuthInfo`) 객체 타입은 [handleBearerAuth](/references/js/functions/handleBearerAuth.md)에서 확인하세요.

#### 호출 시그니처 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "issuer" | "verifyAccessToken"> & VerifyJwtConfig): RequestHandler;
```

사전 정의된 검증 모드를 사용하여 요청의 `Authorization` 헤더에 있는 액세스 토큰 (Access token)을 검증하는 Bearer 인증 (Authentication) 핸들러 (Express 미들웨어)를 생성합니다.

`'jwt'` 모드에서는 인가 (Authorization) 서버의 JWKS URI에서 JWK Set을 사용하여 JWT 검증 함수를 생성합니다.

##### 매개변수 {#parameters}

###### mode {#mode}

`"jwt"`

액세스 토큰 (Access token) 검증 모드입니다. 현재는 'jwt'만 지원됩니다.

**참고**

사용 가능한 모드는 [VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md)에서 확인하세요.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"issuer"` \| `"verifyAccessToken"`\> & `VerifyJwtConfig`

JWT 검증 옵션 및 원격 JWK set 옵션을 포함한 Bearer 인증 (Authentication) 핸들러의 선택적 구성입니다.

**참고**

 - JWT 검증을 위한 사용 가능한 구성 옵션은 VerifyJwtConfig에서 확인하세요.
 - [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md)에서 사용 가능한 구성 옵션(단, `verifyAccessToken` 및 `issuer` 제외)을 확인하세요.

##### 반환값 {#returns}

`RequestHandler`

액세스 토큰 (Access token)을 검증하고 검증 결과를 요청 객체 (`req.auth`)에 추가하는 Express 미들웨어 함수입니다.

##### 참고 {#see}

구현 세부사항 및 확장된 `req.auth` (`AuthInfo`) 객체 타입은 [handleBearerAuth](/references/js/functions/handleBearerAuth.md)에서 확인하세요.

##### 예외 {#throws}

'jwt' 모드 사용 시 서버 메타데이터에 JWKS URI가 제공되지 않은 경우 예외가 발생합니다.

***

### ~~delegatedRouter()~~ {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

인스턴스에 제공된 메타데이터로 레거시 OAuth 2.0 인가 (Authorization) 서버 메타데이터 엔드포인트
(`/.well-known/oauth-authorization-server`)를 제공하는 위임 라우터를 생성합니다.

#### 반환값 {#returns}

`Router`

인스턴스에 제공된 메타데이터로 OAuth 2.0 인가 (Authorization) 서버 메타데이터 엔드포인트를 제공하는 라우터입니다.

#### 더 이상 사용되지 않음 {#deprecated}

대신 [protectedResourceMetadataRouter](/references/js/classes/MCPAuth.md#protectedresourcemetadatarouter)를 사용하세요.

#### 예시 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 초기화되어 있다고 가정
app.use(mcpAuth.delegatedRouter());
```

#### 예외 {#throws}

`리소스 서버` 모드에서 호출 시 예외가 발생합니다.

***

### protectedResourceMetadataRouter() {#protectedresourcemetadatarouter}

```ts
protectedResourceMetadataRouter(): Router;
```

구성된 모든 리소스에 대해 OAuth 2.0 보호된 리소스 메타데이터 엔드포인트를 제공하는 라우터를 생성합니다.

이 라우터는 구성에 제공된 각 리소스 식별자에 대해 올바른 `.well-known` 엔드포인트를 자동으로 생성합니다.

#### 반환값 {#returns}

`Router`

OAuth 2.0 보호된 리소스 메타데이터 엔드포인트를 제공하는 라우터입니다.

#### 예외 {#throws}

`인가 (Authorization) 서버` 모드에서 호출 시 예외가 발생합니다.

#### 예시 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

// mcpAuth가 하나 이상의 `protectedResources` 구성으로 초기화되어 있다고 가정
const mcpAuth: MCPAuth;
const app = express();

// 리소스 식별자에 따라 `/.well-known/oauth-protected-resource/...`에서 메타데이터를 제공합니다.
app.use(mcpAuth.protectedResourceMetadataRouter());
```
