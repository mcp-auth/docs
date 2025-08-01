---
sidebar_label: MCPAuthConfigError
---

# Classe : MCPAuthConfigError

Erreur levée lorsqu'il y a un problème de configuration avec mcp-auth.

## Hérite de {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Constructeurs {#constructors}

### Constructeur {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### Paramètres {#parameters}

##### code {#code}

`string`

Le code d'erreur au format snake_case.

##### message {#message}

`string`

Une description lisible par l'humain de l'erreur.

#### Retourne {#returns}

`MCPAuthConfigError`

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propriétés {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
```

Le code d'erreur au format snake_case.

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthConfigError';
```

#### Redéfini depuis {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Surcharge optionnelle pour formater les traces de pile

#### Paramètres {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### Retourne {#returns}

`any`

#### Voir {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

## Méthodes {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Convertit l'erreur en un format JSON adapté à une réponse HTTP.

#### Paramètres {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Indique s'il faut inclure la cause de l'erreur dans la réponse JSON.
Par défaut à `false`.

#### Retourne {#returns}

`Record`\<`string`, `unknown`\>

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Crée la propriété .stack sur un objet cible

#### Paramètres {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Retourne {#returns}

`void`

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)
