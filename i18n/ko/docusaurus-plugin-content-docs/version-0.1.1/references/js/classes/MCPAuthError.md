---
sidebar_label: MCPAuthError
---

# 클래스: MCPAuthError

모든 mcp-auth 오류의 기본 클래스입니다.

MCP 인증 (Authentication) 및 인가 (Authorization)와 관련된 오류를 표준화된 방식으로 처리할 수 있도록 합니다.

## 상속 {#extends}

- `Error`

## 확장 클래스 {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## 생성자 {#constructors}

### 생성자 {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### 매개변수 {#parameters}

##### code {#code}

`string`

스네이크 케이스 형식의 오류 코드입니다.

##### message {#message}

`string`

오류에 대한 사람이 읽을 수 있는 설명입니다.

#### 반환값 {#returns}

`MCPAuthError`

#### 오버라이드 {#overrides}

```ts
Error.constructor
```

## 속성 {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 상속됨 {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

스네이크 케이스 형식의 오류 코드입니다.

***

### message {#message}

```ts
message: string;
```

#### 상속됨 {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### 오버라이드 {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 상속됨 {#inherited-from}

```ts
Error.stack
```

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

스택 트레이스 포맷팅을 위한 선택적 오버라이드

#### 매개변수 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 반환값 {#returns}

`any`

#### 참고 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 상속됨 {#inherited-from}

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 상속됨 {#inherited-from}

```ts
Error.stackTraceLimit
```

## 메서드 {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

오류를 HTTP 응답에 적합한 JSON 형식으로 변환합니다.

#### 매개변수 {#parameters}

##### showCause {#showcause}

`boolean` = `false`

JSON 응답에 오류의 원인을 포함할지 여부입니다.
기본값은 `false`입니다.

#### 반환값 {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

대상 객체에 .stack 속성을 생성합니다

#### 매개변수 {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 반환값 {#returns}

`void`

#### 상속됨 {#inherited-from}

```ts
Error.captureStackTrace
```
