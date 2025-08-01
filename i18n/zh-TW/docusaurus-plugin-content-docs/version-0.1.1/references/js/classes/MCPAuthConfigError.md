---
sidebar_label: MCPAuthConfigError
---

# 類別：MCPAuthConfigError

當 mcp-auth 配置出現問題時所拋出的錯誤。

## 繼承自 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 建構子 {#constructors}

### 建構子 {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### 參數 {#parameters}

##### code {#code}

`string`

以 snake_case 格式表示的錯誤代碼。

##### message {#message}

`string`

易於理解的錯誤描述。

#### 回傳值 {#returns}

`MCPAuthConfigError`

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 屬性 {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
```

以 snake_case 格式表示的錯誤代碼。

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthConfigError';
```

#### 覆寫自 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

可選的堆疊追蹤格式化覆寫

#### 參數 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 回傳值 {#returns}

`any`

#### 參見 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## 方法 {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

將錯誤轉換為適合 HTTP 回應的 JSON 格式。

#### 參數 {#parameters}

##### showCause {#showcause}

`boolean` = `false`

是否在 JSON 回應中包含錯誤原因。
預設為 `false`。

#### 回傳值 {#returns}

`Record`\<`string`, `unknown`\>

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

在目標物件上建立 .stack 屬性

#### 參數 {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 回傳值 {#returns}

`void`

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
