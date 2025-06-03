---
sidebar_label: fetchServerConfigByWellKnownUrl
---

# 함수: fetchServerConfigByWellKnownUrl()

```ts
function fetchServerConfigByWellKnownUrl(wellKnownUrl: string | URL, config: ServerMetadataConfig): Promise<AuthServerConfig>;
```

제공된 well-known URL에서 서버 구성을 가져오고, 이를 MCP 명세에 따라 검증합니다.

서버 메타데이터가 예상된 스키마와 일치하지 않지만, 호환된다고 확신하는 경우 `transpileData` 함수를 정의하여 메타데이터를 예상 형식으로 변환할 수 있습니다.

## 매개변수 {#parameters}

### wellKnownUrl {#wellknownurl}

서버 구성을 가져올 well-known URL입니다. 문자열 또는 URL 객체일 수 있습니다.

`string` | `URL`

### config {#config}

`ServerMetadataConfig`

서버 유형과 선택적 변환 함수(transpile function)를 포함하는 구성 객체입니다.

## 반환값 {#returns}

`Promise`\<[`AuthServerConfig`](/references/js/type-aliases/AuthServerConfig.md)\>

서버 구성으로 해결되는 프로미스입니다.

## 예외 {#throws}

가져오기(fetch) 작업이 실패할 경우 예외가 발생합니다.

## 예외 {#throws}

서버 메타데이터가 유효하지 않거나 MCP 명세와 일치하지 않을 경우 예외가 발생합니다.
