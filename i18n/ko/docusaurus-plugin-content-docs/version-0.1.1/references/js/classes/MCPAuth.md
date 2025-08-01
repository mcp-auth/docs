---
sidebar_label: MCPAuth
---

# 클래스: MCPAuth

mcp-auth 라이브러리의 주요 클래스이며, MCP 서버에서 인증 (Authentication) 및 인가 (Authorization)를 위한 라우터와 유용한 핸들러를 생성하는 메서드를 제공합니다.

## 참고 {#see}

라이브러리 및 사용법에 대한 자세한 내용은 [MCP Auth](https://mcp-auth.dev) 를 참고하세요.

## 예시 {#example}

원격 OIDC 제공자와 통합하는 예시:

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

// OAuth 2.0 인가 (Authorization) 서버 메타데이터를 처리하는 라우터를 마운트합니다.
app.use(mcpAuth.delegatedRouter());

// MCP 경로에서 Bearer 인증 (Authentication) 핸들러를 사용합니다.
app.get(
  '/mcp',
  mcpAuth.bearerAuth('jwt', { requiredScopes: ['read', 'write'] }),
  (req, res) => {
    console.log('Auth info:', req.auth);
    // 여기서 MCP 요청을 처리합니다.
  },
);

// MCP 콜백에서 인증 (Authentication) 정보를 사용합니다.
server.tool(
  'add',
  { a: z.number(), b: z.number() },
  async ({ a, b }, { authInfo }) => {
    console.log('Auth Info:', authInfo);
   // ...
  },
);
```

## 생성자 {#constructors}

### 생성자 {#constructor}

```ts
new MCPAuth(config: MCPAuthConfig): MCPAuth;
```

#### 매개변수 {#parameters}

##### config {#config}

[`MCPAuthConfig`](/references/js/type-aliases/MCPAuthConfig.md)

#### 반환값 {#returns}

`MCPAuth`

## 속성 {#properties}

### config {#config}

```ts
readonly config: MCPAuthConfig;
```

## 메서드 {#methods}

### bearerAuth() {#bearerauth}

#### 호출 시그니처 {#call-signature}

```ts
bearerAuth(verifyAccessToken: VerifyAccessTokenFunction, config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer">): RequestHandler;
```

요청의 `Authorization` 헤더에 있는 액세스 토큰 (Access token)을 검증하는 Bearer 인증 (Authentication) 핸들러 (Express 미들웨어)를 생성합니다.

##### 매개변수 {#parameters}

###### verifyAccessToken {#verifyaccesstoken}

[`VerifyAccessTokenFunction`](/references/js/type-aliases/VerifyAccessTokenFunction.md)

액세스 토큰 (Access token)을 검증하는 함수입니다. 문자열로 액세스 토큰을 받아, 검증 결과로 resolve되는 promise (또는 값)를 반환해야 합니다.

**참고**

`verifyAccessToken` 함수의 타입 정의는 [VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 를 참고하세요.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\>

Bearer 인증 (Authentication) 핸들러에 대한 선택적 설정입니다.

**참고**

설정 가능한 옵션(단, `verifyAccessToken` 및 `issuer` 제외)은 [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 를 참고하세요.

##### 반환값 {#returns}

`RequestHandler`

액세스 토큰 (Access token)을 검증하고, 검증 결과를 요청 객체 (`req.auth`)에 추가하는 Express 미들웨어 함수입니다.

##### 참고 {#see}

`req.auth` (`AuthInfo`) 객체의 구현 세부사항 및 확장 타입은 [handleBearerAuth](/references/js/functions/handleBearerAuth.md) 를 참고하세요.

#### 호출 시그니처 {#call-signature}

```ts
bearerAuth(mode: "jwt", config?: Omit<BearerAuthConfig, "verifyAccessToken" | "issuer"> & BearerAuthJwtConfig): RequestHandler;
```

사전 정의된 검증 모드를 사용하여 요청의 `Authorization` 헤더에 있는 액세스 토큰 (Access token)을 검증하는 Bearer 인증 (Authentication) 핸들러 (Express 미들웨어)를 생성합니다.

'jwt' 모드에서는, 인가 (Authorization) 서버의 JWKS URI에서 JWK Set을 사용하여 JWT 검증 함수를 생성합니다.

##### 매개변수 {#parameters}

###### mode {#mode}

`"jwt"`

액세스 토큰 (Access token)의 검증 모드입니다. 현재는 'jwt'만 지원됩니다.

**참고**

사용 가능한 모드는 [VerifyAccessTokenMode](/references/js/type-aliases/VerifyAccessTokenMode.md) 를 참고하세요.

###### config? {#config}

`Omit`\<[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md), `"verifyAccessToken"` \| `"issuer"`\> & [`BearerAuthJwtConfig`](/references/js/type-aliases/BearerAuthJwtConfig.md)

JWT 검증 옵션 및 원격 JWK set 옵션을 포함한 Bearer 인증 (Authentication) 핸들러의 선택적 설정입니다.

**참고**

 - JWT 검증을 위한 설정 옵션은 [BearerAuthJwtConfig](/references/js/type-aliases/BearerAuthJwtConfig.md) 를 참고하세요.
 - 설정 가능한 옵션(단, `verifyAccessToken` 및 `issuer` 제외)은 [BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) 를 참고하세요.

##### 반환값 {#returns}

`RequestHandler`

액세스 토큰 (Access token)을 검증하고, 검증 결과를 요청 객체 (`req.auth`)에 추가하는 Express 미들웨어 함수입니다.

##### 참고 {#see}

`req.auth` (`AuthInfo`) 객체의 구현 세부사항 및 확장 타입은 [handleBearerAuth](/references/js/functions/handleBearerAuth.md) 를 참고하세요.

##### 예외 발생 {#throws}

'jwt' 모드 사용 시, 서버 메타데이터에 JWKS URI가 제공되지 않은 경우 예외가 발생합니다.

***

### delegatedRouter() {#delegatedrouter}

```ts
delegatedRouter(): Router;
```

OAuth 2.0 인가 (Authorization) 서버 메타데이터 엔드포인트 (`/.well-known/oauth-authorization-server`)를 인스턴스에 제공된 메타데이터로 제공하는 위임 라우터를 생성합니다.

#### 반환값 {#returns}

`Router`

인스턴스에 제공된 메타데이터로 OAuth 2.0 인가 (Authorization) 서버 메타데이터 엔드포인트를 제공하는 라우터입니다.

#### 예시 {#example}

```ts
import express from 'express';
import { MCPAuth } from 'mcp-auth';

const app = express();
const mcpAuth: MCPAuth; // 초기화되어 있다고 가정
app.use(mcpAuth.delegatedRouter());
```
