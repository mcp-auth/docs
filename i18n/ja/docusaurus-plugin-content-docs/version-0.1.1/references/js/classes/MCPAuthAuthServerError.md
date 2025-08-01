---
sidebar_label: MCPAuthAuthServerError
---

# クラス: MCPAuthAuthServerError

リモート認可 (Authorization) サーバーで問題が発生した場合にスローされるエラーです。

## 継承 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## コンストラクター {#constructors}

### コンストラクター {#constructor}

```ts
new MCPAuthAuthServerError(code: AuthServerErrorCode, cause?: unknown): MCPAuthAuthServerError;
```

#### パラメーター {#parameters}

##### code {#code}

[`AuthServerErrorCode`](/references/js/type-aliases/AuthServerErrorCode.md)

##### cause? {#cause}

`unknown`

#### 戻り値 {#returns}

`MCPAuthAuthServerError`

#### オーバーライド {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## プロパティ {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: AuthServerErrorCode;
```

スネークケース形式のエラーコードです。

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthAuthServerError';
```

#### オーバーライド {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

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

#### 参照 {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## メソッド {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

エラーを HTTP レスポンスに適した JSON 形式に変換します。

#### パラメーター {#parameters}

##### showCause {#showcause}

`boolean` = `false`

JSON レスポンスにエラーの原因を含めるかどうかを指定します。
デフォルトは `false` です。

#### 戻り値 {#returns}

`Record`\<`string`, `unknown`\>

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
