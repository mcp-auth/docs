---
sidebar_label: MCPAuthConfigError
---

# Klasse: MCPAuthConfigError

Fehler, der ausgelöst wird, wenn es ein Konfigurationsproblem mit mcp-auth gibt.

## Erbt von {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Konstruktoren {#constructors}

### Konstruktor {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### Parameter {#parameters}

##### code {#code}

`string`

Der Fehlercode im snake_case-Format.

##### message {#message}

`string`

Eine menschenlesbare Beschreibung des Fehlers.

#### Rückgabe {#returns}

`MCPAuthConfigError`

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Eigenschaften {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
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
name: string = 'MCPAuthConfigError';
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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

Ob die Ursache des Fehlers in der JSON-Antwort enthalten sein soll.
Standardmäßig `false`.

#### Rückgabe {#returns}

`Record`\<`string`, `unknown`\>

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Erstellt die .stack-Eigenschaft auf einem Zielobjekt

#### Parameter {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Rückgabe {#returns}

`void`

#### Geerbt von {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
