---
sidebar_label: MCPAuthError
---

# Clase: MCPAuthError

Clase base para todos los errores de mcp-auth.

Proporciona una forma estandarizada de manejar errores relacionados con la Autenticación (Authentication) y Autorización (Authorization) de MCP.

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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

La propiedad `Error.stackTraceLimit` especifica el número de marcos de pila
recopilados por un seguimiento de pila (ya sea generado por `new Error().stack` o
`Error.captureStackTrace(obj)`).

El valor predeterminado es `10`, pero puede establecerse en cualquier número válido de JavaScript. Los cambios
afectarán a cualquier seguimiento de pila capturado _después_ de que se haya cambiado el valor.

Si se establece en un valor que no es un número, o en un número negativo, los seguimientos de pila
no capturarán ningún marco.

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

Crea una propiedad `.stack` en `targetObject`, que al accederse devuelve
una cadena que representa la ubicación en el código en la que
se llamó a `Error.captureStackTrace()`.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar a `new Error().stack`
```

La primera línea del seguimiento estará precedida por
`${myObject.name}: ${myObject.message}`.

El argumento opcional `constructorOpt` acepta una función. Si se proporciona, todos los marcos
por encima de `constructorOpt`, incluido `constructorOpt`, se omitirán del
seguimiento de pila generado.

El argumento `constructorOpt` es útil para ocultar detalles de implementación
de la generación de errores al usuario. Por ejemplo:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Crear un error sin seguimiento de pila para evitar calcular el seguimiento dos veces.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capturar el seguimiento de pila por encima de la función b
  Error.captureStackTrace(error, b); // Ni la función c ni b se incluyen en el seguimiento de pila
  throw error;
}

a();
```

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

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

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