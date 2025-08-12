---
sidebar_label: MCPAuthBearerAuthError
---

# Classe: MCPAuthBearerAuthError

Erro lançado quando há um problema ao autenticar com tokens Bearer.

## Estende {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Construtores {#constructors}

### Construtor {#constructor}

```ts
new MCPAuthBearerAuthError(code: BearerAuthErrorCode, cause?: MCPAuthBearerAuthErrorDetails): MCPAuthBearerAuthError;
```

#### Parâmetros {#parameters}

##### code {#code}

[`BearerAuthErrorCode`](/references/js/type-aliases/BearerAuthErrorCode.md)

##### cause? {#cause}

[`MCPAuthBearerAuthErrorDetails`](/references/js/type-aliases/MCPAuthBearerAuthErrorDetails.md)

#### Retorna {#returns}

`MCPAuthBearerAuthError`

#### Sobrescreve {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propriedades {#properties}

### cause? {#cause}

```ts
readonly optional cause: MCPAuthBearerAuthErrorDetails;
```

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: BearerAuthErrorCode;
```

O código de erro no formato snake_case.

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`code`](/references/js/classes/MCPAuthError.md#code)

***

### message {#message}

```ts
message: string;
```

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`message`](/references/js/classes/MCPAuthError.md#message)

***

### name {#name}

```ts
name: string = 'MCPAuthBearerAuthError';
```

#### Sobrescreve {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`name`](/references/js/classes/MCPAuthError.md#name)

***

### stack? {#stack}

```ts
optional stack: string;
```

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stack`](/references/js/classes/MCPAuthError.md#stack)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

A propriedade `Error.stackTraceLimit` especifica o número de frames de pilha
coletados por um stack trace (seja gerado por `new Error().stack` ou
`Error.captureStackTrace(obj)`).

O valor padrão é `10`, mas pode ser definido para qualquer número válido em JavaScript. Alterações
afetarão qualquer stack trace capturado _após_ a alteração do valor.

Se definido para um valor não numérico, ou para um número negativo, os stack traces
não capturarão nenhum frame.

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`stackTraceLimit`](/references/js/classes/MCPAuthError.md#stacktracelimit)

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

#### Sobrescreve {#overrides}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

***

### captureStackTrace() {#capturestacktrace}

```ts
static captureStackTrace(targetObject: object, constructorOpt?: Function): void;
```

Cria uma propriedade `.stack` em `targetObject`, que ao ser acessada retorna
uma string representando a localização no código em que
`Error.captureStackTrace()` foi chamado.

```js
const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Semelhante a `new Error().stack`
```

A primeira linha do trace será prefixada com
`${myObject.name}: ${myObject.message}`.

O argumento opcional `constructorOpt` aceita uma função. Se fornecido, todos os frames
acima de `constructorOpt`, incluindo `constructorOpt`, serão omitidos do
stack trace gerado.

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)

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

#### Veja também {#see}

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)