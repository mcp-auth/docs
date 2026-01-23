---
sidebar_label: MCPAuthError
---

# Class: MCPAuthError

Base class for all mcp-auth errors.

It provides a standardized way to handle errors related to MCP authentication and authorization.

## Extends {#extends}

- `Error`

## Extended by {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## Constructors {#constructors}

### Constructor {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Parameters {#parameters}

##### code {#code}

`string`

The error code in snake_case format.

##### message {#message}

`string`

A human-readable description of the error.

#### Returns {#returns}

`MCPAuthError`

#### Overrides {#overrides}

```ts
Error.constructor
```

## Properties {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Inherited from {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

The error code in snake_case format.

***

### message {#message}

```ts
message: string;
```

#### Inherited from {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### Overrides {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Inherited from {#inherited-from}

```ts
Error.stack
```

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

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Inherited from {#inherited-from}

```ts
Error.stackTraceLimit
```

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

```ts
Error.captureStackTrace
```
