---
sidebar_label: MCPAuthAuthServerError
---

# 클래스: MCPAuthAuthServerError

원격 인가 (Authorization) 서버에 문제가 발생했을 때 발생하는 오류입니다.

## 상속 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 생성자 {#constructors}

### 생성자 {#constructor}

```ts
new MCPAuthAuthServerError(code: AuthServerErrorCode, cause?: unknown): MCPAuthAuthServerError;
```

#### 매개변수 {#parameters}

##### code {#code}

[`AuthServerErrorCode`](/references/js/type-aliases/AuthServerErrorCode.md)

##### cause? {#cause}

`unknown`

#### 반환값 {#returns}

`MCPAuthAuthServerError`

#### 오버라이드 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 속성 {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: AuthServerErrorCode;
```

스네이크 케이스 형식의 오류 코드입니다.

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthAuthServerError';
```

#### 오버라이드 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## 메서드 {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

오류를 HTTP 응답에 적합한 JSON 형식으로 변환합니다.

#### 매개변수 {#parameters}

##### showCause {#showcause}

`boolean` = `false`

JSON 응답에 오류의 원인(cause)을 포함할지 여부입니다.
기본값은 `false`입니다.

#### 반환값 {#returns}

`Record`\<`string`, `unknown`\>

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
