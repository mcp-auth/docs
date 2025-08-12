---
sidebar_label: MCPAuthError
---

# クラス: MCPAuthError

すべての mcp-auth エラーの基底クラスです。

MCP の認証 (Authentication) および認可 (Authorization) に関連するエラーを標準化された方法で処理する手段を提供します。

## 継承元 {#extends}

- `Error`

## このクラスを継承するクラス {#extended-by}

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

#### オーバーライド元 {#overrides}

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

#### オーバーライド元 {#overrides}

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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

`Error.stackTraceLimit` プロパティは、スタックトレース（`new Error().stack` または `Error.captureStackTrace(obj)` で生成される）によって収集されるスタックフレームの数を指定します。

デフォルト値は `10` ですが、有効な JavaScript の数値であれば任意に設定できます。値を変更した後にキャプチャされるすべてのスタックトレースに影響します。

数値以外や負の数値を設定した場合、スタックトレースはフレームをキャプチャしません。

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

`targetObject` に `.stack` プロパティを作成し、アクセス時に
`Error.captureStackTrace()` が呼び出されたコード位置を表す文字列を返します。

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // `new Error().stack` と同様
```

トレースの最初の行は
`${myObject.name}: ${myObject.message}` で始まります。

オプションの `constructorOpt` 引数には関数を指定できます。指定した場合、`constructorOpt` より上のすべてのフレーム（`constructorOpt` を含む）は生成されたスタックトレースから省略されます。

`constructorOpt` 引数は、エラー生成の実装詳細をユーザーから隠すのに便利です。例：

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // スタックトレースを二重に計算しないように、スタックトレースなしでエラーを作成
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // 関数 b より上のスタックトレースをキャプチャ
  Error.captureStackTrace(error, b); // c と b はスタックトレースに含まれません
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

```ts
Error.captureStackTrace
```

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

```ts
Error.prepareStackTrace
```
