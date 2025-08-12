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

스네이크 케이스(snake_case) 형식의 오류 코드입니다.

##### message {#message}

`string`

오류에 대한 사람이 읽을 수 있는 설명입니다.

#### 반환값 {#returns}

`MCPAuthError`

#### 오버라이드 {#overrides}

```ts
Error.constructor
```

## 프로퍼티 {#properties}

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

스네이크 케이스(snake_case) 형식의 오류 코드입니다.

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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 프로퍼티는 스택 트레이스( `new Error().stack` 또는 `Error.captureStackTrace(obj)`로 생성됨 )에서 수집되는 스택 프레임의 개수를 지정합니다.

기본값은 `10`이지만, 유효한 JavaScript 숫자로 설정할 수 있습니다. 값이 변경된 이후에 캡처되는 모든 스택 트레이스에 영향을 미칩니다.

숫자가 아닌 값이나 음수로 설정하면, 스택 트레이스는 프레임을 캡처하지 않습니다.

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

JSON 응답에 오류의 원인(cause)을 포함할지 여부입니다.
기본값은 `false`입니다.

#### 반환값 {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

`targetObject`에 `.stack` 프로퍼티를 생성하며, 접근 시
`Error.captureStackTrace()`가 호출된 코드 위치를 나타내는 문자열을 반환합니다.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // `new Error().stack`과 유사
```

트레이스의 첫 번째 줄은
`${myObject.name}: ${myObject.message}`로 시작합니다.

선택적 `constructorOpt` 인자는 함수입니다. 제공되면, `constructorOpt`를 포함하여 그 위의 모든 프레임이 생성된 스택 트레이스에서 생략됩니다.

`constructorOpt` 인자는 오류 생성의 구현 세부 정보를 사용자에게 숨기고 싶을 때 유용합니다. 예시:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // 스택 트레이스를 두 번 계산하지 않기 위해 스택 트레이스 없는 오류 생성
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 함수 b 위에서 스택 트레이스 캡처
  Error.captureStackTrace(error, b); // 함수 c와 b는 스택 트레이스에 포함되지 않음
  throw error;
}

a();
```

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

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

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
