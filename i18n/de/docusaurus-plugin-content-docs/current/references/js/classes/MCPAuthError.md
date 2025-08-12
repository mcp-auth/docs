---
sidebar_label: MCPAuthError
---

# Klasse: MCPAuthError

Basisklasse für alle mcp-auth Fehler.

Sie bietet eine standardisierte Möglichkeit, Fehler im Zusammenhang mit MCP Authentifizierung (Authentication) und Autorisierung (Authorization) zu behandeln.

## Erweitert {#extends}

- `Error`

## Erweitert von {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## Konstruktoren {#constructors}

### Konstruktor {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Parameter {#parameters}

##### code {#code}

`string`

Der Fehlercode im snake_case-Format.

##### message {#message}

`string`

Eine menschenlesbare Beschreibung des Fehlers.

#### Rückgabe {#returns}

`MCPAuthError`

#### Überschreibt {#overrides}

```ts
Error.constructor
```

## Eigenschaften {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Geerbt von {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

Der Fehlercode im snake_case-Format.

***

### message {#message}

```ts
message: string;
```

#### Geerbt von {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### Überschreibt {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Geerbt von {#inherited-from}

```ts
Error.stack
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

Die Eigenschaft `Error.stackTraceLimit` gibt die Anzahl der Stack-Frames an,
die von einem Stack-Trace gesammelt werden (egal ob durch `new Error().stack` oder
`Error.captureStackTrace(obj)` erzeugt).

Der Standardwert ist `10`, kann aber auf jede gültige JavaScript-Zahl gesetzt werden. Änderungen
wirken sich auf alle Stack-Traces aus, die _nachdem_ der Wert geändert wurde, erfasst werden.

Wenn auf einen Nicht-Zahlenwert oder auf eine negative Zahl gesetzt, werden keine Frames
im Stack-Trace erfasst.

#### Geerbt von {#inherited-from}

```ts
Error.stackTraceLimit
```

## Methoden {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Konvertiert den Fehler in ein HTTP-Response-freundliches JSON-Format.

#### Parameter {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Ob die Ursache des Fehlers in der JSON-Antwort enthalten sein soll.
Standardmäßig `false`.

#### Rückgabe {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Erstellt eine `.stack`-Eigenschaft auf `targetObject`, die beim Zugriff
einen String zurückgibt, der den Ort im Code repräsentiert, an dem
`Error.captureStackTrace()` aufgerufen wurde.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Ähnlich wie `new Error().stack`
```

Die erste Zeile des Traces wird mit
`${myObject.name}: ${myObject.message}` vorangestellt.

Das optionale Argument `constructorOpt` akzeptiert eine Funktion. Falls angegeben, werden alle Frames
oberhalb von `constructorOpt`, einschließlich `constructorOpt`, aus dem generierten Stack-Trace entfernt.

Das Argument `constructorOpt` ist nützlich, um Implementierungsdetails der Fehlererzeugung vor dem Benutzer zu verbergen. Zum Beispiel:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Erzeuge einen Fehler ohne Stack-Trace, um die Berechnung des Stack-Traces zweimal zu vermeiden.
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

#### Rückgabe {#returns}

`void`

#### Geerbt von {#inherited-from}

```ts
Error.captureStackTrace
```

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

#### Rückgabe {#returns}

`any`

#### Siehe {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Geerbt von {#inherited-from}

```ts
Error.prepareStackTrace
```
