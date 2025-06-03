---
sidebar_label: MCPAuthError
---

# 类：MCPAuthError

所有 mcp-auth 错误的基类。

它为处理与 MCP 认证 (Authentication) 和授权 (Authorization) 相关的错误提供了标准化方式。

## 继承自 {#extends}

- `Error`

## 被继承 {#extended-by}

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

错误代码，使用 snake_case 格式。

##### message {#message}

`string`

对错误的人类可读描述。

#### 返回值 {#returns}

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

错误代码，使用 snake_case 格式。

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

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

可选的堆栈跟踪格式化重写

#### 参数 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 返回值 {#returns}

`any`

#### 参见 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 继承自 {#inherited-from}

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

是否在 JSON 响应中包含错误原因。
默认为 `false`。

#### 返回值 {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

在目标对象上创建 .stack 属性

#### 参数 {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 返回值 {#returns}

`void`

#### 继承自 {#inherited-from}

```ts
Error.captureStackTrace
```
