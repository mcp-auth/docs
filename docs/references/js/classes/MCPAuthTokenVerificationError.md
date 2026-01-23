---
sidebar_label: MCPAuthTokenVerificationError
---

# Class: MCPAuthTokenVerificationError

Error thrown when there is an issue when verifying tokens.

## Extends {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Constructors {#constructors}

### Constructor {#constructor}

```ts
new MCPAuthTokenVerificationError(code: MCPAuthTokenVerificationErrorCode, cause?: unknown): MCPAuthTokenVerificationError;
```

#### Parameters {#parameters}

##### code {#code}

[`MCPAuthTokenVerificationErrorCode`](/references/js/type-aliases/MCPAuthTokenVerificationErrorCode.md)

##### cause? {#cause}

`unknown`

#### Returns {#returns}

`MCPAuthTokenVerificationError`

#### Overrides {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Properties {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: MCPAuthTokenVerificationErrorCode;
```

The error code in snake_case format.

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthTokenVerificationError';
```

#### Overrides {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Optional override for formatting stack traces

#### Parameters {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### Returns {#returns}

`any`

#### See {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Methods {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Converts the error to a HTTP response friendly JSON format.

#### Parameters {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Whether to include the cause of the error in the JSON response.
Defaults to `false`.

#### Returns {#returns}

`Record`\<`string`, `unknown`\>

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Create .stack property on a target object

#### Parameters {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Returns {#returns}

`void`

#### Inherited from {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
