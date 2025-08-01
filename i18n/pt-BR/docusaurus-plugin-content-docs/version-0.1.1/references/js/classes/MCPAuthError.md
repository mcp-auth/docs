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

### prepareStackTrace()? {#preparestacktrace}

```ts
static optional prepareStackTrace: (err: Error, stackTraces: CallSite[]) => any;
```

Sobrescrita opcional para formatação de rastreamentos de pilha

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

```ts
Error.prepareStackTrace
```

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

Cria a propriedade .stack em um objeto alvo

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
