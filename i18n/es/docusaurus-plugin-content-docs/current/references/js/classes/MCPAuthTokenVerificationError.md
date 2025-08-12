---
sidebar_label: MCPAuthTokenVerificationError
---

# Clase: MCPAuthTokenVerificationError

Error lanzado cuando hay un problema al verificar tokens.

## Hereda de {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Constructores {#constructors}

### Constructor {#constructor}

```ts
new MCPAuthTokenVerificationError(code: MCPAuthTokenVerificationErrorCode, cause?: unknown): MCPAuthTokenVerificationError;
```

#### Parámetros {#parameters}

##### code {#code}

[`MCPAuthTokenVerificationErrorCode`](/references/js/type-aliases/MCPAuthTokenVerificationErrorCode.md)

##### cause? {#cause}

`unknown`

#### Devuelve {#returns}

`MCPAuthTokenVerificationError`

#### Sobrescribe {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propiedades {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: MCPAuthTokenVerificationErrorCode;
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
name: string = 'MCPAuthTokenVerificationError';
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

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

La propiedad `Error.stackTraceLimit` especifica el número de marcos de pila
recopilados por un seguimiento de pila (ya sea generado por `new Error().stack` o
`Error.captureStackTrace(obj)`).

El valor predeterminado es `10`, pero se puede establecer en cualquier número válido de JavaScript. Los cambios
afectarán cualquier seguimiento de pila capturado _después_ de que se haya cambiado el valor.

Si se establece en un valor que no es un número, o en un número negativo, los seguimientos de pila
no capturarán ningún marco.

#### Heredado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Métodos {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Convierte el error a un formato JSON apto para respuestas HTTP.

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

  // Captura el seguimiento de pila por encima de la función b
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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)