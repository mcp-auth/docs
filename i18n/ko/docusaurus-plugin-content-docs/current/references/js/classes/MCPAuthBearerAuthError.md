---
sidebar_label: MCPAuthBearerAuthError
---

# 클래스: MCPAuthBearerAuthError

Bearer 토큰으로 인증 (Authentication)할 때 문제가 발생하면 발생하는 오류입니다.

## 상속 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 생성자 {#constructors}

### 생성자 {#constructor}

```ts
new MCPAuthBearerAuthError(code: BearerAuthErrorCode, cause?: MCPAuthBearerAuthErrorDetails): MCPAuthBearerAuthError;
```

#### 매개변수 {#parameters}

##### code {#code}

[`BearerAuthErrorCode`](/references/js/type-aliases/BearerAuthErrorCode.md)

##### cause? {#cause}

[`MCPAuthBearerAuthErrorDetails`](/references/js/type-aliases/MCPAuthBearerAuthErrorDetails.md)

#### 반환값 {#returns}

`MCPAuthBearerAuthError`

#### 오버라이드 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 프로퍼티 {#properties}

### cause? {#cause}

```ts
readonly optional cause: MCPAuthBearerAuthErrorDetails;
```

#### 상속됨 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: BearerAuthErrorCode;
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
name: string = 'MCPAuthBearerAuthError';
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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 프로퍼티는 스택 트레이스가 수집하는 스택 프레임의 개수를 지정합니다 (`new Error().stack` 또는 `Error.captureStackTrace(obj)`로 생성된 경우).

기본값은 `10`이지만, 유효한 JavaScript 숫자로 설정할 수 있습니다. 값이 변경된 이후에 캡처된 모든 스택 트레이스에 영향을 미칩니다.

숫자가 아닌 값이나 음수로 설정하면, 스택 트레이스는 프레임을 캡처하지 않습니다.

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

JSON 응답에 오류의 원인(cause)을 포함할지 여부입니다. 기본값은 `false`입니다.

#### 반환값 {#returns}

`Record`\<`string`, `unknown`\>

#### 오버라이드 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

`targetObject`에 `.stack` 프로퍼티를 생성하며, 접근 시 `Error.captureStackTrace()`가 호출된 코드 위치를 나타내는 문자열을 반환합니다.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // `new Error().stack`과 유사
```

트레이스의 첫 번째 줄은 `${myObject.name}: ${myObject.message}`로 시작합니다.

선택적 `constructorOpt` 인자는 함수입니다. 제공되면, `constructorOpt`를 포함하여 그 위의 모든 프레임이 생성된 스택 트레이스에서 생략됩니다.

`constructorOpt` 인자는 오류 생성의 구현 세부 정보를 사용자로부터 숨기는 데 유용합니다. 예시:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // 스택 트레이스를 두 번 계산하지 않도록 스택 트레이스 없는 오류 생성
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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)
