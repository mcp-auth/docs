---
sidebar_label: MCPAuthError
---

# Klasse: MCPAuthError

Basisklasse für alle mcp-auth Fehler.

Sie bietet eine standardisierte Möglichkeit, Fehler im Zusammenhang mit MCP Authentifizierung (Authentication) und Autorisierung (Authorization) zu behandeln.

## Erweitert {#extends}

- `Error`

## Erweitert durch {#extended-by}

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

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Optionale Überschreibung zur Formatierung von Stacktraces

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

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

Ob die Ursache des Fehlers in die JSON-Antwort aufgenommen werden soll.
Standardmäßig `false`.

#### Rückgabe {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Erstellt die .stack Eigenschaft auf einem Zielobjekt

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
