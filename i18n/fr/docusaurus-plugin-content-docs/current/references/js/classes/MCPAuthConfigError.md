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

Une description lisible de l'erreur.

#### Retourne {#returns}

`MCPAuthConfigError`

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propriétés {#properties}

### cause ? {#cause}

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

#### Redéfinit {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack ? {#stack}

```ts
optional stack: string;
```

#### Hérité de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

La propriété `Error.stackTraceLimit` spécifie le nombre de frames de pile
collectés par une trace de pile (qu'elle soit générée par `new Error().stack` ou
`Error.captureStackTrace(obj)`).

La valeur par défaut est `10` mais peut être définie sur n'importe quel nombre JavaScript valide. Les modifications
affecteront toute trace de pile capturée _après_ que la valeur ait été modifiée.

Si elle est définie sur une valeur non numérique, ou sur un nombre négatif, les traces de pile
ne captureront aucune frame.

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

Crée une propriété `.stack` sur `targetObject`, qui, lorsqu'elle est accédée, retourne
une chaîne représentant l'emplacement dans le code où
`Error.captureStackTrace()` a été appelé.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similaire à `new Error().stack`
```

La première ligne de la trace sera préfixée par
`${myObject.name}: ${myObject.message}`.

L'argument optionnel `constructorOpt` accepte une fonction. Si fourni, toutes les frames
au-dessus de `constructorOpt`, y compris `constructorOpt`, seront omises de la
trace de pile générée.

L'argument `constructorOpt` est utile pour masquer les détails d'implémentation
de la génération d'erreur à l'utilisateur. Par exemple :

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)
