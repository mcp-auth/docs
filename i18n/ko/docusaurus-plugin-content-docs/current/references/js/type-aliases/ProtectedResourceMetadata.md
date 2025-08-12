---
sidebar_label: ProtectedResourceMetadata
---

# 타입 별칭: ProtectedResourceMetadata

```ts
type ProtectedResourceMetadata = {
  authorization_details_types_supported?: string[];
  authorization_servers?: string[];
  bearer_methods_supported?: string[];
  dpop_bound_access_tokens_required?: boolean;
  dpop_signing_alg_values_supported?: string[];
  jwks_uri?: string;
  resource: string;
  resource_documentation?: string;
  resource_name?: string;
  resource_policy_uri?: string;
  resource_signing_alg_values_supported?: string[];
  resource_tos_uri?: string;
  scopes_supported?: string[];
  signed_metadata?: string;
  tls_client_certificate_bound_access_tokens?: boolean;
};
```

OAuth 2.0 보호된 리소스 메타데이터 스키마입니다.

## 타입 선언 {#type-declaration}

### authorization\_details\_types\_supported? {#authorization-details-types-supported}

```ts
optional authorization_details_types_supported: string[];
```

authorization_details 요청 파라미터를 사용할 때 지원되는 인가 세부 정보 타입 값입니다.

### authorization\_servers? {#authorization-servers}

```ts
optional authorization_servers: string[];
```

이 보호된 리소스와 함께 사용할 수 있는 OAuth 인가 서버 발급자 식별자 목록입니다.

### bearer\_methods\_supported? {#bearer-methods-supported}

```ts
optional bearer_methods_supported: string[];
```

OAuth 2.0 베어러 토큰을 전송할 때 지원되는 방법입니다. 값: ["header", "body", "query"].

### dpop\_bound\_access\_tokens\_required? {#dpop-bound-access-tokens-required}

```ts
optional dpop_bound_access_tokens_required: boolean;
```

이 보호된 리소스가 항상 DPoP-바인딩 액세스 토큰 (액세스 토큰)을 요구하는지 여부입니다.

### dpop\_signing\_alg\_values\_supported? {#dpop-signing-alg-values-supported}

```ts
optional dpop_signing_alg_values_supported: string[];
```

DPoP 증명 JWT (JWT)를 검증할 때 지원되는 JWS 알고리즘입니다.

### jwks\_uri? {#jwks-uri}

```ts
optional jwks_uri: string;
```

보호된 리소스의 JSON Web Key (JWK) 세트 문서의 URL입니다. 이 문서에는 이 보호된 리소스가 반환하는 응답 또는 데이터의 디지털 서명을 검증하는 데 사용할 수 있는 공개 키가 포함되어 있습니다.  
이는 토큰 검증에 사용되는 인가 서버의 jwks_uri와 다릅니다. 보호된 리소스가 응답에 서명하는 경우, 클라이언트는 이 공개 키를 가져와 수신 데이터의 진위성과 무결성을 검증할 수 있습니다.

### resource {#resource}

```ts
resource: string;
```

보호된 리소스의 리소스 식별자입니다.

### resource\_documentation? {#resource-documentation}

```ts
optional resource_documentation: string;
```

보호된 리소스를 사용하는 방법에 대한 개발자 문서가 포함된 URL입니다.

### resource\_name? {#resource-name}

```ts
optional resource_name: string;
```

최종 사용자에게 표시할 보호된 리소스의 사람이 읽을 수 있는 이름입니다.

### resource\_policy\_uri? {#resource-policy-uri}

```ts
optional resource_policy_uri: string;
```

보호된 리소스의 데이터 사용 요구 사항에 대한 정보가 포함된 URL입니다.

### resource\_signing\_alg\_values\_supported? {#resource-signing-alg-values-supported}

```ts
optional resource_signing_alg_values_supported: string[];
```

리소스 응답에 서명할 때 보호된 리소스가 지원하는 JWS 서명 알고리즘입니다.

### resource\_tos\_uri? {#resource-tos-uri}

```ts
optional resource_tos_uri: string;
```

보호된 리소스의 서비스 약관이 포함된 URL입니다.

### scopes\_supported? {#scopes-supported}

```ts
optional scopes_supported: string[];
```

이 보호된 리소스에 접근하기 위한 인가 요청에서 사용되는 스코프 (Scope) 값 목록입니다.

### signed\_metadata? {#signed-metadata}

```ts
optional signed_metadata: string;
```

클레임으로 메타데이터 파라미터를 포함하는 서명된 JWT (JWT)입니다. JWT는 JWS를 사용하여 서명되어야 하며 'iss' 클레임을 포함해야 합니다. 이 필드는 메타데이터 자체의 진위성을 암호학적으로 검증할 수 있는 방법을 제공합니다. 서명은 jwks_uri 엔드포인트에서 제공되는 공개 키를 사용하여 검증할 수 있습니다. 이 값이 존재할 경우, 이 서명된 메타데이터의 값이 이 메타데이터 문서의 해당 일반 JSON 값보다 우선합니다. 이는 리소스 메타데이터의 변조를 방지하는 데 도움이 됩니다.

### tls\_client\_certificate\_bound\_access\_tokens? {#tls-client-certificate-bound-access-tokens}

```ts
optional tls_client_certificate_bound_access_tokens: boolean;
```

보호된 리소스가 상호-TLS 클라이언트 인증서-바인딩 액세스 토큰 (액세스 토큰)을 지원하는지 여부입니다.
