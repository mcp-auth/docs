---
sidebar_label: MCPAuthTokenVerificationError
---

# Klasse: MCPAuthTokenVerificationError

Fehler, der ausgelöst wird, wenn beim Überprüfen von Tokens ein Problem auftritt.

## Erbt von {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Konstruktoren {#constructors}

### Konstruktor {#constructor}

```ts
new MCPAuthTokenVerificationError(code: MCPAuthTokenVerificationErrorCode, cause?: unknown): MCPAuthTokenVerificationError;
```

#### Parameter {#parameters}

##### code {#code}

[`MCPAuthTokenVerificationErrorCode`](/references/js/type-aliases/MCPAuthTokenVerificationErrorCode.md)

##### cause? {#cause}

`unknown`

#### Rückgabewert {#returns}

`MCPAuthTokenVerificationError`

#### Überschreibt {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Eigenschaften {#properties}

### cause? {#cause}

```ts
readonly optional cause: unknown;
```

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: MCPAuthTokenVerificationErrorCode;
```

Der Fehlercode im snake_case-Format.

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthTokenVerificationError';
```

#### Überschreibt {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

Die Eigenschaft `Error.stackTraceLimit` gibt die Anzahl der Stack-Frames an, die von einem Stack-Trace gesammelt werden (egal ob durch `new Error().stack` oder `Error.captureStackTrace(obj)` generiert).

Der Standardwert ist `10`, kann aber auf jede gültige JavaScript-Zahl gesetzt werden. Änderungen wirken sich auf alle Stack-Traces aus, die _nachdem_ der Wert geändert wurde, erfasst werden.

Wenn ein ungültiger Wert (kein Zahlwert oder negativ) gesetzt wird, werden keine Stack-Frames erfasst.

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Methoden {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Konvertiert den Fehler in ein HTTP-Response-freundliches JSON-Format.

#### Parameter {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Legt fest, ob die Ursache des Fehlers in der JSON-Antwort enthalten sein soll.
Standard ist `false`.

#### Rückgabewert {#returns}

`Record`\<`string`, `unknown`\>

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Erstellt eine `.stack`-Eigenschaft auf `targetObject`, die beim Zugriff einen String zurückgibt, der den Ort im Code darstellt, an dem `Error.captureStackTrace()` aufgerufen wurde.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Ähnlich wie `new Error().stack`
```

Die erste Zeile des Traces wird mit
`${myObject.name}: ${myObject.message}` vorangestellt.

Das optionale Argument `constructorOpt` akzeptiert eine Funktion. Falls angegeben, werden alle Frames oberhalb von `constructorOpt`, einschließlich `constructorOpt`, aus dem generierten Stack-Trace ausgelassen.

Das Argument `constructorOpt` ist nützlich, um Implementierungsdetails der Fehlererzeugung vor dem Benutzer zu verbergen. Zum Beispiel:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Erzeuge einen Fehler ohne Stack-Trace, um die Berechnung des Stack-Traces doppelt zu vermeiden.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Erfasse den Stack-Trace oberhalb der Funktion b
  Error.captureStackTrace(error, b); // Weder Funktion c noch b sind im Stack-Trace enthalten
  throw error;
}

a();
```

#### Parameter {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Rückgabewert {#returns}

`void`

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

#### Parameter {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### Rückgabewert {#returns}

`any`

#### Siehe {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)
