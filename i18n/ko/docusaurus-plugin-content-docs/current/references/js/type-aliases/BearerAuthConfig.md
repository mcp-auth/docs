---
sidebar_label: BearerAuthConfig
---

# 타입 별칭: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer: string;
  requiredScopes?: string[];
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## 속성(Properties) {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

액세스 토큰 (Access token)의 예상 대상 (audience) (`aud` 클레임 (Claim)). 일반적으로 토큰이 사용될 리소스 서버 (API)를 의미합니다. 이 값이 제공되지 않으면 대상 (Audience) 확인이 생략됩니다.

**참고:** 인가 서버가 리소스 지표 (Resource Indicators, RFC 8707)를 지원하지 않는 경우, 대상 (Audience)이 관련 없을 수 있으므로 이 필드를 생략할 수 있습니다.

#### 참고(See) {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: string;
```

액세스 토큰 (Access token)의 예상 발급자 (Issuer) (`iss` 클레임 (Claim)). 토큰을 발급한 인가 서버의 URL이어야 합니다.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

액세스 토큰 (Access token)이 반드시 포함해야 하는 스코프 (Scope) 배열입니다. 토큰에 이 모든 스코프 (Scope)가 없으면 오류가 발생합니다.

**참고:** 핸들러는 토큰의 `scope` 클레임 (Claim)을 확인합니다. 이 값은 인가 서버의 구현에 따라 공백으로 구분된 문자열이거나 문자열 배열일 수 있습니다. 만약 `scope` 클레임 (Claim)이 없으면, 핸들러는 `scopes` 클레임 (Claim)이 있는지 확인합니다.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

응답에 상세 오류 정보를 표시할지 여부입니다. 개발 중 디버깅에 유용하지만, 민감한 정보 노출을 방지하기 위해 운영 환경에서는 비활성화해야 합니다.

#### 기본값(Default) {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

액세스 토큰 (Access token) 검증을 위한 함수 타입입니다.

이 함수는 토큰이 유효하지 않은 경우 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)를 throw 하거나, 토큰이 유효한 경우 AuthInfo 객체를 반환해야 합니다.

#### 참고(See) {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md)에서 자세한 내용을 확인하세요.
