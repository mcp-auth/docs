---
sidebar_label: MCPAuthError
---

# 類別：MCPAuthError

所有 mcp-auth 錯誤的基礎類別。

它提供一種標準化方式來處理與 MCP 驗證 (Authentication) 和授權 (Authorization) 相關的錯誤。

## 繼承自 {#extends}

- `Error`

## 被繼承於 {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## 建構子 {#constructors}

### 建構子 {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### 參數 {#parameters}

##### code {#code}

`string`

錯誤代碼，採用 snake_case 格式。

##### message {#message}

`string`

錯誤的人類可讀描述。

#### 回傳值 {#returns}

`MCPAuthError`

#### 覆寫自 {#overrides}

```ts
Error.constructor
```

## 屬性 {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 繼承自 {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

錯誤代碼，採用 snake_case 格式。

***

### message {#message}

```ts
message: string;
```

#### 繼承自 {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### 覆寫自 {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 繼承自 {#inherited-from}

```ts
Error.stack
```

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

#### 參考 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 繼承自 {#inherited-from}

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 繼承自 {#inherited-from}

```ts
Error.stackTraceLimit
```

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

```ts
Error.captureStackTrace
```
