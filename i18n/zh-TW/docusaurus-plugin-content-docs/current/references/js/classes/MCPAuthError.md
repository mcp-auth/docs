---
sidebar_label: MCPAuthError
---

# 類別：MCPAuthError

所有 mcp-auth 錯誤的基礎類別。

它提供一種標準化方式來處理與 MCP 驗證 (Authentication) 和授權 (Authorization) 相關的錯誤。

## 繼承自 {#extends}

- `Error`

## 被以下類別擴充 {#extended-by}

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

#### 回傳 {#returns}

`MCPAuthError`

#### 覆寫 {#overrides}

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

#### 覆寫 {#overrides}

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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` 屬性指定堆疊追蹤（無論是由 `new Error().stack` 或 `Error.captureStackTrace(obj)` 產生）所收集的堆疊框架數量。

預設值為 `10`，但可以設為任何有效的 JavaScript 數字。更改後會影響之後捕獲的所有堆疊追蹤。

如果設為非數字值或負數，則堆疊追蹤將不會捕獲任何框架。

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

是否在 JSON 回應中包含錯誤原因（cause）。
預設為 `false`。

#### 回傳 {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

在 `targetObject` 上建立 `.stack` 屬性，當存取時會回傳一個字串，表示呼叫 `Error.captureStackTrace()` 時的程式碼位置。

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // 類似於 `new Error().stack`
```

追蹤的第一行會以 `${myObject.name}: ${myObject.message}` 為前綴。

可選的 `constructorOpt` 參數接受一個函式。如果提供，則所有在 `constructorOpt` 之上的堆疊框架（包含 `constructorOpt`）都會從產生的堆疊追蹤中省略。

`constructorOpt` 參數有助於隱藏錯誤產生的實作細節。例如：

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // 建立一個沒有堆疊追蹤的錯誤，以避免重複計算堆疊追蹤。
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 捕獲 function b 之上的堆疊追蹤
  Error.captureStackTrace(error, b); // 堆疊追蹤中不包含 function c 與 b
  throw error;
}

a();
```

#### 參數 {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 回傳 {#returns}

`void`

#### 繼承自 {#inherited-from}

```ts
Error.captureStackTrace
```

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

#### 參數 {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 回傳 {#returns}

`any`

#### 參考 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 繼承自 {#inherited-from}

```ts
Error.prepareStackTrace
```
