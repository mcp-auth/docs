---
sidebar_label: AuthorizationServerMetadata
---

# 타입 별칭: AuthorizationServerMetadata

```ts
type AuthorizationServerMetadata = {
  authorization_endpoint: string;
  code_challenge_methods_supported?: string[];
  grant_types_supported?: string[];
  introspection_endpoint?: string;
  introspection_endpoint_auth_methods_supported?: string[];
  introspection_endpoint_auth_signing_alg_values_supported?: string[];
  issuer: string;
  jwks_uri?: string;
  op_policy_uri?: string;
  op_tos_uri?: string;
  registration_endpoint?: string;
  response_modes_supported?: string[];
  response_types_supported: string[];
  revocation_endpoint?: string;
  revocation_endpoint_auth_methods_supported?: string[];
  revocation_endpoint_auth_signing_alg_values_supported?: string[];
  scope_supported?: string[];
  service_documentation?: string;
  token_endpoint: string;
  token_endpoint_auth_methods_supported?: string[];
  token_endpoint_auth_signing_alg_values_supported?: string[];
  ui_locales_supported?: string[];
  userinfo_endpoint?: string;
};
```

RFC 8414에서 정의된 OAuth 2.0 인가 서버 메타데이터 스키마입니다.

## 타입 선언 {#type-declaration}

### authorization\_endpoint {#authorization-endpoint}

```ts
authorization_endpoint: string;
```

인가 서버의 인가 엔드포인트 URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
인가 엔드포인트를 사용하는 grant type이 지원되지 않는 경우를 제외하고 필수입니다.

#### 참고 {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.1

### code\_challenge\_methods\_supported? {#code-challenge-methods-supported}

```ts
optional code_challenge_methods_supported: string[];
```

이 인가 서버가 지원하는 Proof Key for Code Exchange (PKCE) [[RFC7636](https://www.rfc-editor.org/rfc/rfc7636)] 코드 챌린지 방식의 목록을 포함하는 JSON 배열입니다.

### grant\_types\_supported? {#grant-types-supported}

```ts
optional grant_types_supported: string[];
```

이 인가 서버가 지원하는 OAuth 2.0 grant type 값의 목록을 포함하는 JSON 배열입니다. 배열 값은 "OAuth 2.0 Dynamic Client Registration Protocol" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)]에서 정의된 `grant_types` 파라미터와 동일하게 사용됩니다.
생략된 경우 기본값은 `["authorization_code", "implicit"]`입니다.

### introspection\_endpoint? {#introspection-endpoint}

```ts
optional introspection_endpoint: string;
```

인가 서버의 OAuth 2.0 인트로스펙션 엔드포인트 URL [[RFC7662](https://www.rfc-editor.org/rfc/rfc7662)].

### introspection\_endpoint\_auth\_methods\_supported? {#introspection-endpoint-auth-methods-supported}

```ts
optional introspection_endpoint_auth_methods_supported: string[];
```

### introspection\_endpoint\_auth\_signing\_alg\_values\_supported? {#introspection-endpoint-auth-signing-alg-values-supported}

```ts
optional introspection_endpoint_auth_signing_alg_values_supported: string[];
```

### issuer {#issuer}

```ts
issuer: string;
```

인가 서버의 발급자 (Issuer) 식별자입니다. `https` 스킴을 사용하며 쿼리 또는 프래그먼트 컴포넌트가 없는 URL입니다.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

인가 서버의 JWK Set [[JWK](https://www.rfc-editor.org/rfc/rfc8414.html#ref-JWK)] 문서의 URL입니다. 참조된 문서에는 인가 서버의 서명을 검증하기 위해 클라이언트가 사용하는 서명 키가 포함되어 있습니다. 이 URL은 반드시 `https` 스킴을 사용해야 합니다.

### op\_policy\_uri? {#op-policy-uri}

```ts
optional op_policy_uri: string;
```

### op\_tos\_uri? {#op-tos-uri}

```ts
optional op_tos_uri: string;
```

### registration\_endpoint? {#registration-endpoint}

```ts
optional registration_endpoint: string;
```

인가 서버의 OAuth 2.0 동적 클라이언트 등록 엔드포인트 URL [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)].

### response\_modes\_supported? {#response-modes-supported}

```ts
optional response_modes_supported: string[];
```

이 인가 서버가 지원하는 OAuth 2.0 `response_mode` 값의 목록을 포함하는 JSON 배열입니다. "OAuth 2.0 Multiple Response Type Encoding Practices" [[OAuth.Responses](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Responses)]에서 명시되어 있습니다.

생략된 경우 기본값은 `["query", "fragment"]`입니다. `"form_post"` 응답 모드는 "OAuth 2.0 Form Post Response Mode" [[OAuth.FormPost](https://datatracker.ietf.org/doc/html/rfc8414#ref-OAuth.Post)]에서 정의되어 있습니다.

### response\_types\_supported {#response-types-supported}

```ts
response_types_supported: string[];
```

이 인가 서버가 지원하는 OAuth 2.0 `response_type` 값의 목록을 포함하는 JSON 배열입니다. 배열 값은 "OAuth 2.0 Dynamic Client Registration Protocol" [[RFC7591](https://www.rfc-editor.org/rfc/rfc7591)]에서 정의된 `response_types` 파라미터와 동일하게 사용됩니다.

### revocation\_endpoint? {#revocation-endpoint}

```ts
optional revocation_endpoint: string;
```

인가 서버의 OAuth 2.0 토큰 폐기 엔드포인트 URL [[RFC7009](https://www.rfc-editor.org/rfc/rfc7009)].

### revocation\_endpoint\_auth\_methods\_supported? {#revocation-endpoint-auth-methods-supported}

```ts
optional revocation_endpoint_auth_methods_supported: string[];
```

### revocation\_endpoint\_auth\_signing\_alg\_values\_supported? {#revocation-endpoint-auth-signing-alg-values-supported}

```ts
optional revocation_endpoint_auth_signing_alg_values_supported: string[];
```

### scope\_supported? {#scope-supported}

```ts
optional scope_supported: string[];
```

### service\_documentation? {#service-documentation}

```ts
optional service_documentation: string;
```

### token\_endpoint {#token-endpoint}

```ts
token_endpoint: string;
```

인가 서버의 토큰 엔드포인트 URL [[RFC6749](https://rfc-editor.org/rfc/rfc6749)].
암시적(implicit) grant type만 지원하는 경우를 제외하고 필수입니다.

#### 참고 {#see}

https://rfc-editor.org/rfc/rfc6749#section-3.2

### token\_endpoint\_auth\_methods\_supported? {#token-endpoint-auth-methods-supported}

```ts
optional token_endpoint_auth_methods_supported: string[];
```

### token\_endpoint\_auth\_signing\_alg\_values\_supported? {#token-endpoint-auth-signing-alg-values-supported}

```ts
optional token_endpoint_auth_signing_alg_values_supported: string[];
```

### ui\_locales\_supported? {#ui-locales-supported}

```ts
optional ui_locales_supported: string[];
```

### userinfo\_endpoint? {#userinfo-endpoint}

```ts
optional userinfo_endpoint: string;
```

OpenID Connect [userinfo 엔드포인트](https://openid.net/specs/openid-connect-core-1_0.html#UserInfo)의 URL입니다.
이 엔드포인트는 인증된 사용자에 대한 정보를 가져오는 데 사용됩니다.

## 참고 {#see}

https://datatracker.ietf.org/doc/html/rfc8414