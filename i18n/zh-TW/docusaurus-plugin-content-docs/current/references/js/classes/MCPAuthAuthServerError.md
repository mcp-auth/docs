---
sidebar_label: MCPAuthAuthServerError
---

# 類別：MCPAuthAuthServerError

當遠端授權 (Authorization) 伺服器發生問題時所拋出的錯誤。

## 繼承自 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## 建構子 {#constructors}

### 建構子 {#constructor}

```ts
new MCPAuthAuthServerError(code: AuthServerErrorCode, cause?: unknown): MCPAuthAuthServerError;
```

#### 參數 {#parameters}

##### code {#code}

[`AuthServerErrorCode`](/references/js/type-aliases/AuthServerErrorCode.md)

##### cause? {#cause}

`unknown`

#### 回傳值 {#returns}

`MCPAuthAuthServerError`

#### 覆寫自 {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## 屬性 {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### 繼承自 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: AuthServerErrorCode;
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
name: string = 'MCPAuthAuthServerError';
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

可選的堆疊追蹤格式化覆寫方法

#### 參數 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 回傳值 {#returns}

`any`

#### 參考 {#see}

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
