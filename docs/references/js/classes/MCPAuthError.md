---
sidebar_label: MCPAuthError
---

# Class: MCPAuthError

Base class for all mcp-auth errors.

These errors cover configuration and authorization server discovery failures. Token
verification failures are intentionally NOT represented here — `MCPAuth#verifyAccessToken`
throws the MCP SDK's `OAuthError` instead, because the SDK bearer-auth helpers only map
`OAuthError` to proper `401` challenge responses (anything else becomes a `500`).

## Extends

- `Error`

## Extended by

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)

## Constructors

### Constructor

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Parameters

##### code

`string`

The error code in snake_case format.

##### message

`string`

A human-readable description of the error.

#### Returns

`MCPAuthError`

#### Overrides

```ts
Error.constructor
```

## Properties

### cause?

```ts
optional cause: unknown;
```

#### Inherited from

```ts
Error.cause
```

***

### code

```ts
readonly code: string;
```

The error code in snake_case format.

***

### message

```ts
message: string;
```

#### Inherited from

```ts
Error.message
```

***

### name

```ts
name: string = 'MCPAuthError';
```

#### Overrides

```ts
Error.name
```

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

```ts
Error.stack
```

***

### prepareStackTrace()?

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

`CallSite`[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

#### Inherited from

```ts
Error.stackTraceLimit
```

## Methods

### captureStackTrace()

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

```ts
Error.captureStackTrace
```
