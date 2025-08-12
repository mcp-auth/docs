---
sidebar_label: MCPAuthTokenVerificationError
---

# クラス: MCPAuthTokenVerificationError

トークンの検証時に問題が発生した場合にスローされるエラーです。

## 継承 {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## コンストラクター {#constructors}

### コンストラクター {#constructor}

```ts
new MCPAuthTokenVerificationError(code: MCPAuthTokenVerificationErrorCode, cause?: unknown): MCPAuthTokenVerificationError;
```

#### パラメーター {#parameters}

##### code {#code}

[`MCPAuthTokenVerificationErrorCode`](/references/js/type-aliases/MCPAuthTokenVerificationErrorCode.md)

##### cause? {#cause}

`unknown`

#### 戻り値 {#returns}

`MCPAuthTokenVerificationError`

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
readonly code: MCPAuthTokenVerificationErrorCode;
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
name: string = 'MCPAuthTokenVerificationError';
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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` プロパティは、スタックトレース（`new Error().stack` または `Error.captureStackTrace(obj)` で生成される）によって収集されるスタックフレームの数を指定します。

デフォルト値は `10` ですが、有効な JavaScript の数値であれば任意に設定できます。値を変更した後にキャプチャされたスタックトレースに影響します。

数値以外や負の数を設定した場合、スタックトレースはフレームをキャプチャしません。

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

エラーの原因を JSON レスポンスに含めるかどうか。デフォルトは `false` です。

#### 戻り値 {#returns}

`Record`\<`string`, `unknown`\>

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

`targetObject` に `.stack` プロパティを作成し、アクセス時に
`Error.captureStackTrace()` が呼び出されたコード位置を表す文字列を返します。

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // `new Error().stack` と同様
```

トレースの最初の行は
`${myObject.name}: ${myObject.message}` で始まります。

オプションの `constructorOpt` 引数には関数を指定できます。指定した場合、`constructorOpt` を含むそれより上のすべてのフレームが
生成されたスタックトレースから省略されます。

`constructorOpt` 引数は、エラー生成の実装詳細をユーザーから隠すのに便利です。例：

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // スタックトレースを二重に計算しないよう、スタックトレースなしでエラーを作成
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 関数 b より上のスタックトレースをキャプチャ
  Error.captureStackTrace(error, b); // 関数 c と b はスタックトレースに含まれません
  throw error;
}

a();
```

#### パラメーター {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### 戻り値 {#returns}

`void`

#### 継承元 {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)
