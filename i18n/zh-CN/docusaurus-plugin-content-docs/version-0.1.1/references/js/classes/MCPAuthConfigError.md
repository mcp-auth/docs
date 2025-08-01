---
sidebar_label: MCPAuthConfigError
---

# 类：MCPAuthConfigError

当 mcp-auth 配置出现问题时抛出的错误。

## 继承关系 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 构造函数 {#constructors}

### 构造函数 {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### 参数 {#parameters}

##### code {#code}

`string`

以 snake_case 格式表示的错误代码。

##### message {#message}

`string`

对错误的人类可读描述。

#### 返回值 {#returns}

`MCPAuthConfigError`

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 属性 {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
```

以 snake_case 格式表示的错误代码。

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
name: string = 'MCPAuthConfigError';
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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

#### 返回值 {#returns}

`Record`\<`string`, `unknown`\>

#### 继承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
