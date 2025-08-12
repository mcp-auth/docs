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

Une description lisible de l’erreur.

#### Retourne {#returns}

`MCPAuthError`

#### Redéfinit {#overrides}

```ts
Error.constructor
```

## Propriétés {#properties}

### cause ? {#cause}

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

### stack ? {#stack}

```ts
optional stack: string;
```

#### Hérité de {#inherited-from}

```ts
Error.stack
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

La propriété `Error.stackTraceLimit` spécifie le nombre de frames de pile
collectés par une trace de pile (qu’elle soit générée par `new Error().stack` ou
`Error.captureStackTrace(obj)`).

La valeur par défaut est `10` mais peut être définie sur n’importe quel nombre JavaScript valide. Les modifications
affecteront toute trace de pile capturée _après_ le changement de valeur.

Si elle est définie sur une valeur non numérique, ou sur un nombre négatif, les traces de pile
ne captureront aucune frame.

#### Hérité de {#inherited-from}

```ts
Error.stackTraceLimit
```

## Méthodes {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Convertit l’erreur en un format JSON adapté à une réponse HTTP.

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

Crée une propriété `.stack` sur `targetObject`, qui, lorsqu’elle est accédée, retourne
une chaîne représentant l’emplacement dans le code où
`Error.captureStackTrace()` a été appelé.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similaire à `new Error().stack`
```

La première ligne de la trace sera préfixée par
`${myObject.name}: ${myObject.message}`.

L’argument optionnel `constructorOpt` accepte une fonction. Si fourni, toutes les frames
au-dessus de `constructorOpt`, y compris `constructorOpt`, seront omises de la
trace de pile générée.

L’argument `constructorOpt` est utile pour masquer les détails d’implémentation
de la génération d’erreur à l’utilisateur. Par exemple :

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Créer une erreur sans trace de pile pour éviter de calculer la trace deux fois.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Capturer la trace de pile au-dessus de la fonction b
  Error.captureStackTrace(error, b); // Ni la fonction c, ni b ne sont incluses dans la trace de pile
  throw error;
}

a();
```

#### Paramètres {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt ? {#constructoropt}

`Function`

#### Retourne {#returns}

`void`

#### Hérité de {#inherited-from}

```ts
Error.captureStackTrace
```

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

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
