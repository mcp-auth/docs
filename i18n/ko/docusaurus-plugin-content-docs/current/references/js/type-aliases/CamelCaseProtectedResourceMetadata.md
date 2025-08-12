---
sidebar_label: CamelCaseProtectedResourceMetadata
---

# 타입 별칭: CamelCaseProtectedResourceMetadata

```ts
type CamelCaseProtectedResourceMetadata = {
  authorizationDetailsTypesSupported?: string[];
  authorizationServers?: string[];
  bearerMethodsSupported?: string[];
  dpopBoundAccessTokensRequired?: boolean;
  dpopSigningAlgValuesSupported?: string[];
  jwksUri?: string;
  resource: string;
  resourceDocumentation?: string;
  resourceName?: string;
  resourcePolicyUri?: string;
  resourceSigningAlgValuesSupported?: string[];
  resourceTosUri?: string;
  scopesSupported?: string[];
  signedMetadata?: string;
  tlsClientCertificateBoundAccessTokens?: boolean;
};
```

OAuth 2.0 불투명 토큰 (Opaque token) 보호 리소스 메타데이터 타입의 camelCase 버전입니다.

## 타입 선언 {#type-declaration}

### authorizationDetailsTypesSupported? {#authorizationdetailstypessupported}

```ts
optional authorizationDetailsTypesSupported: string[];
```

### authorizationServers? {#authorizationservers}

```ts
optional authorizationServers: string[];
```

### bearerMethodsSupported? {#bearermethodssupported}

```ts
optional bearerMethodsSupported: string[];
```

### dpopBoundAccessTokensRequired? {#dpopboundaccesstokensrequired}

```ts
optional dpopBoundAccessTokensRequired: boolean;
```

### dpopSigningAlgValuesSupported? {#dpopsigningalgvaluessupported}

```ts
optional dpopSigningAlgValuesSupported: string[];
```

### jwksUri? {#jwksuri}

```ts
optional jwksUri: string;
```

### resource {#resource}

```ts
resource: string;
```

### resourceDocumentation? {#resourcedocumentation}

```ts
optional resourceDocumentation: string;
```

### resourceName? {#resourcename}

```ts
optional resourceName: string;
```

### resourcePolicyUri? {#resourcepolicyuri}

```ts
optional resourcePolicyUri: string;
```

### resourceSigningAlgValuesSupported? {#resourcesigningalgvaluessupported}

```ts
optional resourceSigningAlgValuesSupported: string[];
```

### resourceTosUri? {#resourcetosuri}

```ts
optional resourceTosUri: string;
```

### scopesSupported? {#scopessupported}

```ts
optional scopesSupported: string[];
```

### signedMetadata? {#signedmetadata}

```ts
optional signedMetadata: string;
```

### tlsClientCertificateBoundAccessTokens? {#tlsclientcertificateboundaccesstokens}

```ts
optional tlsClientCertificateBoundAccessTokens: boolean;
```

## 참고 {#see}

원본 타입 및 필드 정보는 [ProtectedResourceMetadata](/references/js/type-aliases/ProtectedResourceMetadata.md) 를 참조하세요.
