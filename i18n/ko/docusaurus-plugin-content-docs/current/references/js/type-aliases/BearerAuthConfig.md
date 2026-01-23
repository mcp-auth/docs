---
sidebar_label: BearerAuthConfig
---

# 타입 별칭: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## 속성(Properties) {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

액세스 토큰 (Access token)의 예상 대상 (Audience) (`aud` 클레임 (Claim)). 일반적으로 토큰이 의도된 리소스 서버 (API)입니다. 제공하지 않으면 대상 (Audience) 확인이 건너뜁니다.

**참고:** 인가 서버가 리소스 지표 (Resource Indicator) (RFC 8707)를 지원하지 않는 경우, 대상 (Audience)이 관련 없을 수 있으므로 이 필드를 생략할 수 있습니다.

#### 참고(See) {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

유효한 발급자 (Issuer)를 나타내는 문자열 또는 액세스 토큰 (Access token)의 발급자 (Issuer)를 검증하는 함수.

문자열이 제공되면, 예상 발급자 (Issuer) 값으로 직접 비교에 사용됩니다.

함수가 제공되면, [ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md)의 규칙에 따라 발급자 (Issuer)를 검증해야 합니다.

#### 참고(See) {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md)에서 검증 함수에 대한 자세한 내용을 확인하세요.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

액세스 토큰 (Access token)이 반드시 가져야 하는 필수 스코프 (Scope)들의 배열. 토큰에 이 모든 스코프 (Scope)가 포함되어 있지 않으면 오류가 발생합니다.

**참고:** 핸들러는 토큰의 `scope` 클레임 (Claim)을 확인합니다. 이 값은 인가 서버의 구현에 따라 공백으로 구분된 문자열이거나 문자열 배열일 수 있습니다. `scope` 클레임 (Claim)이 없으면, 핸들러는 `scopes` 클레임 (Claim)이 있는지 확인합니다.

***

### resource? {#resource}

```ts
optional resource: string;
```

보호된 리소스의 식별자. 제공된 경우, 핸들러는 이 리소스에 대해 구성된 인가 서버를 사용하여 받은 토큰을 검증합니다. `protectedResources` 구성과 함께 핸들러를 사용할 때 필수입니다.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

응답에 상세 오류 정보를 표시할지 여부. 개발 중 디버깅에 유용하지만, 민감한 정보 노출을 방지하기 위해 운영 환경에서는 비활성화해야 합니다.

#### 기본값(Default) {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

액세스 토큰 (Access token) 검증을 위한 함수 타입.

이 함수는 토큰이 유효하지 않은 경우 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)를 throw 하거나, 토큰이 유효한 경우 AuthInfo 객체를 반환해야 합니다.

#### 참고(See) {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md)에서 자세한 내용을 확인하세요.
