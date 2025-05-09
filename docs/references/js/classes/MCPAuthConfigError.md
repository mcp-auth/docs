---
sidebar_label: MCPAuthConfigError
---

# Class: MCPAuthConfigError

Error thrown when there is a configuration issue with mcp-auth.

## Extends

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Constructors

### Constructor

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### Parameters

##### code

`string`

The error code in snake_case format.

##### message

`string`

A human-readable description of the error.

#### Returns

`MCPAuthConfigError`

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Properties

### cause?

```ts
optional cause: unknown;
```

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code

```ts
readonly code: string;
```

The error code in snake_case format.

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message

```ts
message: string;
```

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name

```ts
name: string = 'MCPAuthConfigError';
```

#### Overrides

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack?

```ts
optional stack: string;
```

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit

```ts
static stackTraceLimit: number;
```

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Methods

### toJson()

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Converts the error to a HTTP response friendly JSON format.

#### Parameters

##### showCause

`boolean` = `false`

Whether to include the cause of the error in the JSON response.
Defaults to `false`.

#### Returns

`Record`\<`string`, `unknown`\>

#### Inherited from

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
