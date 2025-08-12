---
sidebar_label: MCPAuthError
---

# 类：MCPAuthError

所有 mcp-auth 错误的基类。

它为处理与 MCP 认证 (Authentication) 和授权 (Authorization) 相关的错误提供了标准化方式。

## 继承自 {#extends}

- `Error`

## 被以下类继承 {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## 构造函数 {#constructors}

### 构造函数 {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### 参数 {#parameters}

##### code {#code}

`string`

错误代码，采用 snake_case 格式。

##### message {#message}

`string`

对错误的人类可读描述。

#### 返回 {#returns}

`MCPAuthError`

#### 重写自 {#overrides}

```ts
Error.constructor
```

## 属性 {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 继承自 {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

错误代码，采用 snake_case 格式。

***

### message {#message}

```ts
message: string;
```

#### 继承自 {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### 重写自 {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 继承自 {#inherited-from}

```ts
Error.stack
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 属性指定堆栈跟踪收集的堆栈帧数量（无论是由 `new Error().stack` 还是 `Error.captureStackTrace(obj)` 生成）。

默认值为 `10`，但可以设置为任何有效的 JavaScript 数字。更改后将影响之后捕获的所有堆栈跟踪。

如果设置为非数字值，或设置为负数，则堆栈跟踪不会捕获任何帧。

#### 继承自 {#inherited-from}

```ts
Error.stackTraceLimit
```

## 方法 {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

将错误转换为适合 HTTP 响应的 JSON 格式。

#### 参数 {#parameters}

##### showCause {#showcause}

`boolean` = `false`

是否在 JSON 响应中包含错误原因。默认为 `false`。

#### 返回 {#returns}

`Record`\<`string`, `unknown`\>

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

可选的 `constructorOpt` 参数接受一个函数。如果提供，则生成的堆栈跟踪中将省略 `constructorOpt` 及其以上的所有帧。

`constructorOpt` 参数用于隐藏错误生成的实现细节。例如：

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // 创建一个没有堆栈跟踪的错误以避免重复计算堆栈。
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 捕获 b 以上的堆栈跟踪
  Error.captureStackTrace(error, b); // 堆栈跟踪中不包含 c 和 b
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

```ts
Error.captureStackTrace
```

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

#### 参考 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 继承自 {#inherited-from}

```ts
Error.prepareStackTrace
```
