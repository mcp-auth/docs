---
sidebar_label: MCPAuthError
---

# Clase: MCPAuthError

Clase base para todos los errores de mcp-auth.

Proporciona una forma estandarizada de manejar errores relacionados con la autenticación (Authentication) y autorización (Authorization) de MCP.

## Hereda de {#extends}

- `Error`

## Extendida por {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## Constructores {#constructors}

### Constructor {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Parámetros {#parameters}

##### code {#code}

`string`

El código de error en formato snake_case.

##### message {#message}

`string`

Una descripción legible para humanos del error.

#### Devuelve {#returns}

`MCPAuthError`

#### Sobrescribe {#overrides}

```ts
Error.constructor
```

## Propiedades {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Heredado de {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

El código de error en formato snake_case.

***

### message {#message}

```ts
message: string;
```

#### Heredado de {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### Sobrescribe {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Heredado de {#inherited-from}

```ts
Error.stack
```

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

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Heredado de {#inherited-from}

```ts
Error.stackTraceLimit
```

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

```ts
Error.captureStackTrace
```
