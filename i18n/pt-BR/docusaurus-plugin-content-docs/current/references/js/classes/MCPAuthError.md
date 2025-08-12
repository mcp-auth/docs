---
sidebar_label: MCPAuthError
---

# Classe: MCPAuthError

Classe base para todos os erros do mcp-auth.

Ela fornece uma maneira padronizada de lidar com erros relacionados à autenticação (Authentication) e autorização (Authorization) MCP.

## Estende {#extends}

- `Error`

## Estendida por {#extended-by}

- [`MCPAuthConfigError`](/references/js/classes/MCPAuthConfigError.md)
- [`MCPAuthAuthServerError`](/references/js/classes/MCPAuthAuthServerError.md)
- [`MCPAuthBearerAuthError`](/references/js/classes/MCPAuthBearerAuthError.md)
- [`MCPAuthTokenVerificationError`](/references/js/classes/MCPAuthTokenVerificationError.md)

## Construtores {#constructors}

### Construtor {#constructor}

```ts
new MCPAuthError(code: string, message: string): MCPAuthError;
```

#### Parâmetros {#parameters}

##### code {#code}

`string`

O código do erro no formato snake_case.

##### message {#message}

`string`

Uma descrição legível do erro.

#### Retorna {#returns}

`MCPAuthError`

#### Sobrescreve {#overrides}

```ts
Error.constructor
```

## Propriedades {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Herdado de {#inherited-from}

```ts
Error.cause
```

***

### code {#code}

```ts
readonly code: string;
```

O código do erro no formato snake_case.

***

### message {#message}

```ts
message: string;
```

#### Herdado de {#inherited-from}

```ts
Error.message
```

***

### name {#name}

```ts
name: string = 'MCPAuthError';
```

#### Sobrescreve {#overrides}

```ts
Error.name
```

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Herdado de {#inherited-from}

```ts
Error.stack
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

A propriedade `Error.stackTraceLimit` especifica o número de frames de pilha
coletados por um stack trace (seja gerado por `new Error().stack` ou
`Error.captureStackTrace(obj)`).

O valor padrão é `10`, mas pode ser definido para qualquer número válido do JavaScript. Alterações
afetarão qualquer stack trace capturado _após_ a alteração do valor.

Se definido para um valor não numérico, ou para um número negativo, os stack traces
não capturarão nenhum frame.

#### Herdado de {#inherited-from}

```ts
Error.stackTraceLimit
```

## Métodos {#methods}

### toJson() {#tojson}

```ts
toJson(showCause: boolean): Record<string, unknown>;
```

Converte o erro para um formato JSON amigável para resposta HTTP.

#### Parâmetros {#parameters}

##### showCause {#showcause}

`boolean` = `false`

Se deve incluir a causa do erro na resposta JSON.
O padrão é `false`.

#### Retorna {#returns}

`Record`\<`string`, `unknown`\>

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Cria uma propriedade `.stack` em `targetObject`, que ao ser acessada retorna
uma string representando a localização no código em que
`Error.captureStackTrace()` foi chamada.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Semelhante a `new Error().stack`
```

A primeira linha do trace será prefixada com
`${myObject.name}: ${myObject.message}`.

O argumento opcional `constructorOpt` aceita uma função. Se fornecido, todos os frames
acima de `constructorOpt`, incluindo `constructorOpt`, serão omitidos do stack trace gerado.

O argumento `constructorOpt` é útil para ocultar detalhes de implementação
da geração do erro para o usuário. Por exemplo:

```js
function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Cria um erro sem stack trace para evitar calcular o stack trace duas vezes.
  const { stackTraceLimit } = Error;
  Error.stackTraceLimit = 0;
  const error = new Error();
  Error.stackTraceLimit = stackTraceLimit;

  // Captura o stack trace acima da função b
  Error.captureStackTrace(error, b); // Nem a função c, nem b são incluídas no stack trace
  throw error;
}

a();
```

#### Parâmetros {#parameters}

##### targetObject {#targetobject}

`object`

##### constructorOpt? {#constructoropt}

`Function`

#### Retorna {#returns}

`void`

#### Herdado de {#inherited-from}

```ts
Error.captureStackTrace
```

***

### prepareStackTrace() {#preparestacktrace}

```ts
static prepareStackTrace(err: Error, stackTraces: CallSite[]): any;
```

#### Parâmetros {#parameters}

##### err {#err}

`Error`

##### stackTraces {#stacktraces}

`CallSite`[]

#### Retorna {#returns}

`any`

#### Veja {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Herdado de {#inherited-from}

```ts
Error.prepareStackTrace
```