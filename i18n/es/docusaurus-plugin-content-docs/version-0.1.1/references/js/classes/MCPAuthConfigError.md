---
sidebar_label: MCPAuthConfigError
---

# Clase: MCPAuthConfigError

Error lanzado cuando hay un problema de configuración con mcp-auth.

## Hereda de {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Constructores {#constructors}

### Constructor {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### Parámetros {#parameters}

##### code {#code}

`string`

El código de error en formato snake_case.

##### message {#message}

`string`

Una descripción legible para humanos del error.

#### Devuelve {#returns}

`MCPAuthConfigError`

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propiedades {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
```

El código de error en formato snake_case.

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthConfigError';
```

#### Sobrescribe {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Sobrescritura opcional para formatear los stack traces

#### Parámetros {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### Devuelve {#returns}

`any`

#### Ver {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Métodos {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Convierte el error a un formato JSON amigable para respuestas HTTP.

#### Parámetros {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Indica si se debe incluir la causa del error en la respuesta JSON.
Por defecto es `false`.

#### Devuelve {#returns}

`Record`\<`string`, `unknown`\>

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Crea la propiedad .stack en un objeto objetivo

#### Parámetros {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Devuelve {#returns}

`void`

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)