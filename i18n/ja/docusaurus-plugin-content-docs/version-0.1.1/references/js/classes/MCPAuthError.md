---
sidebar_label: MCPAuthError
---

# クラス: MCPAuthError

すべての mcp-auth エラーの基底クラスです。

MCP の認証 (Authentication) および認可 (Authorization) に関連するエラーを標準化された方法で処理するためのものです。

## 継承元 {#extends}

- `Error`

## 継承先 {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## コンストラクター {#constructors}

### コンストラクター {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### パラメーター {#parameters}

##### code {#code}

`string`

スネークケース形式のエラーコード。

##### message {#message}

`string`

エラーの人間が読める説明。

#### 戻り値 {#returns}

`MCPAuthError`

#### オーバーライド {#overrides}

```ts
Error.constructor
```

## プロパティ {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### 継承元 {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

スネークケース形式のエラーコード。

***

### message {#message}

```ts
message: string;
```

#### 継承元 {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### オーバーライド {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 継承元 {#inherited-from}

```ts
Error.stack
```

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

スタックトレースのフォーマットをカスタマイズするためのオプションのオーバーライド

#### パラメーター {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### 戻り値 {#returns}

`any`

#### 参考 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 継承元 {#inherited-from}

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 継承元 {#inherited-from}

```ts
Error.stackTraceLimit
```

## メソッド {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

エラーを HTTP レスポンスに適した JSON 形式に変換します。

#### パラメーター {#parameters}

##### showCause {#showcause}

`boolean` = `false`

JSON レスポンスにエラーの原因を含めるかどうか。
デフォルトは `false` です。

#### 戻り値 {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

ターゲットオブジェクトに .stack プロパティを作成します

#### パラメーター {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 戻り値 {#returns}

`void`

#### 継承元 {#inherited-from}

```ts
Error.captureStackTrace
```
