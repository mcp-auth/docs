---
sidebar_label: MCPAuthBearerAuthError
---

# 类：MCPAuthBearerAuthError

当使用 Bearer 令牌进行认证 (Authentication) 时出现问题时抛出的错误。

## 继承自 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 构造函数 {#constructors}

### 构造函数 {#constructor}

```ts
new MCPAuthBearerAuthError(code: BearerAuthErrorCode, cause?: MCPAuthBearerAuthErrorDetails): MCPAuthBearerAuthError;
```

#### 参数 {#parameters}

##### code {#code}

[`BearerAuthErrorCode`](/references/js/type-aliases/BearerAuthErrorCode.md)

##### cause? {#cause}

[`MCPAuthBearerAuthErrorDetails`](/references/js/type-aliases/MCPAuthBearerAuthErrorDetails.md)

#### 返回 {#returns}

`MCPAuthBearerAuthError`

#### 重写自 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 属性 {#properties}

### cause? {#cause}

```ts
readonly optional cause: MCPAuthBearerAuthErrorDetails;
```

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: BearerAuthErrorCode;
```

错误代码，采用 snake_case 格式。

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthBearerAuthError';
```

#### 重写自 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 属性指定堆栈跟踪收集的堆栈帧数量（无论是由 `new Error().stack` 还是 `Error.captureStackTrace(obj)` 生成）。

默认值为 `10`，但可以设置为任何有效的 JavaScript 数字。更改后将影响之后捕获的任何堆栈跟踪。

如果设置为非数字值或负数，则堆栈跟踪不会捕获任何帧。

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## 方法 {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

将错误转换为适合 HTTP 响应的 JSON 格式。

#### 参数 {#parameters}

##### showCause {#showcause}

`boolean` = `false`

是否在 JSON 响应中包含错误原因。
默认为 `false`。

#### 返回 {#returns}

`Record`\<`string`, `unknown`\>

#### 重写自 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

在 `targetObject` 上创建一个 `.stack` 属性，当访问时返回一个字符串，表示调用 `Error.captureStackTrace()` 时代码中的位置。

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // 类似于 `new Error().stack`
```

跟踪的第一行将以 `${myObject.name}: ${myObject.message}` 为前缀。

可选的 `constructorOpt` 参数接受一个函数。如果提供，则在生成的堆栈跟踪中，将省略 `constructorOpt` 及其以上的所有帧。

`constructorOpt` 参数用于隐藏错误生成的实现细节。例如：

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // 创建一个没有堆栈跟踪的错误，以避免重复计算堆栈跟踪。
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 捕获 function b 以上的堆栈跟踪
  Error.captureStackTrace(error, b); // 堆栈跟踪中不包含 function c 和 b
  throw error;
}

a();
```

#### 参数 {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 返回 {#returns}

`void`

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

#### 参数 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 返回 {#returns}

`any`

#### 参见 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)
