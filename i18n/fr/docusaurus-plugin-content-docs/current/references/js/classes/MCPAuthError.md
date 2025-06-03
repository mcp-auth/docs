---
sidebar_label: MCPAuthError
---

# Classe : MCPAuthError

Classe de base pour toutes les erreurs mcp-auth.

Elle fournit un moyen standardisé de gérer les erreurs liées à l’authentification (Authentication) et à l’autorisation (Authorization) MCP.

## Hérite de {#extends}

- `Error`

## Étendue par {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## Constructeurs {#constructors}

### Constructeur {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Paramètres {#parameters}

##### code {#code}

`string`

Le code d’erreur au format snake_case.

##### message {#message}

`string`

Une description lisible par l’humain de l’erreur.

#### Retourne {#returns}

`MCPAuthError`

#### Redéfinit {#overrides}

```ts
Error.constructor
```

## Propriétés {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Hérité de {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

Le code d’erreur au format snake_case.

***

### message {#message}

```ts
message: string;
```

#### Hérité de {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### Redéfinit {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Hérité de {#inherited-from}

```ts
Error.stack
```

***

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Surcharge optionnelle pour le formatage des traces de pile

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

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

#### Hérité de {#inherited-from}

```ts
Error.stackTraceLimit
```

## Méthodes {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Convertit l’erreur au format JSON adapté à une réponse HTTP.

#### Paramètres {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Indique s’il faut inclure la cause de l’erreur dans la réponse JSON.
Par défaut à `false`.

#### Retourne {#returns}

`Record`\<`string`, `unknown`\>

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

```ts
Error.captureStackTrace
```
