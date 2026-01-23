---
sidebar_label: getIssuer
---

# 함수: getIssuer()

```ts
function getIssuer(config: AuthServerConfig): string;
```

인증 서버 구성에서 발급자 (Issuer) URL을 가져옵니다.

- 해석된 구성: `metadata.issuer`에서 추출
- 디스커버리 구성: `issuer`를 직접 반환

## 매개변수 {#parameters}

### config {#config}

[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)

## 반환값 {#returns}

`string`
