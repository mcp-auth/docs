---
sidebar_label: MCPAuthBearerAuthError
---

# 類別：MCPAuthBearerAuthError

當使用 Bearer 權杖進行驗證 (Authentication) 時發生問題時所拋出的錯誤。

## 繼承 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 建構子 {#constructors}

### 建構子 {#constructor}

```ts
new MCPAuthBearerAuthError(code: BearerAuthErrorCode, cause?: MCPAuthBearerAuthErrorDetails): MCPAuthBearerAuthError;
```

#### 參數 {#parameters}

##### code {#code}

[`BearerAuthErrorCode`](/references/js/type-aliases/BearerAuthErrorCode.md)

##### cause? {#cause}

[`MCPAuthBearerAuthErrorDetails`](/references/js/type-aliases/MCPAuthBearerAuthErrorDetails.md)

#### 回傳值 {#returns}

`MCPAuthBearerAuthError`

#### 覆寫 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 屬性 {#properties}

### cause? {#cause}

```ts
readonly optional cause: MCPAuthBearerAuthErrorDetails;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: BearerAuthErrorCode;
```

錯誤代碼，採用 snake_case 格式。

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
name: string = 'MCPAuthBearerAuthError';
```

#### 覆寫 {#overrides}

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

可選的堆疊追蹤格式化覆寫方法

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

#### 覆寫 {#overrides}

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
