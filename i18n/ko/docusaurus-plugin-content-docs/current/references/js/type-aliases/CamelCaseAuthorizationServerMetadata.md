---
sidebar_label: CamelCaseAuthorizationServerMetadata
---

# 타입 별칭: CamelCaseAuthorizationServerMetadata

```ts
type CamelCaseAuthorizationServerMetadata = {
  authorizationEndpoint: string;
  codeChallengeMethodsSupported?: string[];
  grantTypesSupported?: string[];
  introspectionEndpoint?: string;
  introspectionEndpointAuthMethodsSupported?: string[];
  introspectionEndpointAuthSigningAlgValuesSupported?: string[];
  issuer: string;
  jwksUri?: string;
  opPolicyUri?: string;
  opTosUri?: string;
  registrationEndpoint?: string;
  responseModesSupported?: string[];
  responseTypesSupported: string[];
  revocationEndpoint?: string;
  revocationEndpointAuthMethodsSupported?: string[];
  revocationEndpointAuthSigningAlgValuesSupported?: string[];
  scopeSupported?: string[];
  serviceDocumentation?: string;
  tokenEndpoint: string;
  tokenEndpointAuthMethodsSupported?: string[];
  tokenEndpointAuthSigningAlgValuesSupported?: string[];
  uiLocalesSupported?: string[];
  userinfoEndpoint?: string;
};
```

OAuth 2.0 인가 서버 메타데이터 (Authorization Server Metadata) 타입의 camelCase 버전입니다.

## 타입 선언 {#type-declaration}

### authorizationEndpoint {#authorizationendpoint}

```ts
authorizationEndpoint: string;
```

### codeChallengeMethodsSupported? {#codechallengemethodssupported}

```ts
optional codeChallengeMethodsSupported: string[];
```

### grantTypesSupported? {#granttypessupported}

```ts
optional grantTypesSupported: string[];
```

### introspectionEndpoint? {#introspectionendpoint}

```ts
optional introspectionEndpoint: string;
```

### introspectionEndpointAuthMethodsSupported? {#introspectionendpointauthmethodssupported}

```ts
optional introspectionEndpointAuthMethodsSupported: string[];
```

### introspectionEndpointAuthSigningAlgValuesSupported? {#introspectionendpointauthsigningalgvaluessupported}

```ts
optional introspectionEndpointAuthSigningAlgValuesSupported: string[];
```

### issuer {#issuer}

```ts
issuer: string;
```

### jwksUri? {#jwksuri}

```ts
optional jwksUri: string;
```

### opPolicyUri? {#oppolicyuri}

```ts
optional opPolicyUri: string;
```

### opTosUri? {#optosuri}

```ts
optional opTosUri: string;
```

### registrationEndpoint? {#registrationendpoint}

```ts
optional registrationEndpoint: string;
```

### responseModesSupported? {#responsemodessupported}

```ts
optional responseModesSupported: string[];
```

### responseTypesSupported {#responsetypessupported}

```ts
responseTypesSupported: string[];
```

### revocationEndpoint? {#revocationendpoint}

```ts
optional revocationEndpoint: string;
```

### revocationEndpointAuthMethodsSupported? {#revocationendpointauthmethodssupported}

```ts
optional revocationEndpointAuthMethodsSupported: string[];
```

### revocationEndpointAuthSigningAlgValuesSupported? {#revocationendpointauthsigningalgvaluessupported}

```ts
optional revocationEndpointAuthSigningAlgValuesSupported: string[];
```

### scopeSupported? {#scopesupported}

```ts
optional scopeSupported: string[];
```

### serviceDocumentation? {#servicedocumentation}

```ts
optional serviceDocumentation: string;
```

### tokenEndpoint {#tokenendpoint}

```ts
tokenEndpoint: string;
```

### tokenEndpointAuthMethodsSupported? {#tokenendpointauthmethodssupported}

```ts
optional tokenEndpointAuthMethodsSupported: string[];
```

### tokenEndpointAuthSigningAlgValuesSupported? {#tokenendpointauthsigningalgvaluessupported}

```ts
optional tokenEndpointAuthSigningAlgValuesSupported: string[];
```

### uiLocalesSupported? {#uilocalessupported}

```ts
optional uiLocalesSupported: string[];
```

### userinfoEndpoint? {#userinfoendpoint}

```ts
optional userinfoEndpoint: string;
```

## 참고 {#see}

원본 타입 및 필드 정보는 [AuthorizationServerMetadata](/references/js/type-aliases/AuthorizationServerMetadata.md) 를 참고하세요.
