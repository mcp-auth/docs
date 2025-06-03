---
sidebar_label: MCPAuthConfigError
---

# Classe: MCPAuthConfigError

Erro lançado quando há um problema de configuração com o mcp-auth.

## Estende {#extends}

- [`MCPAuthError`](/references/js/classes/MCPAuthError.md)

## Construtores {#constructors}

### Construtor {#constructor}

```ts
new MCPAuthConfigError(code: string, message: string): MCPAuthConfigError;
```

#### Parâmetros {#parameters}

##### code {#code}

`string`

O código do erro no formato snake_case.

##### message {#message}

`string`

Uma descrição legível do erro.

#### Retorna {#returns}

`MCPAuthConfigError`

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`constructor`](/references/js/classes/MCPAuthError.md#constructor)

## Propriedades {#properties}

### cause? {#cause}

```ts
optional cause: unknown;
```

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`cause`](/references/js/classes/MCPAuthError.md#cause)

***

### code {#code}

```ts
readonly code: string;
```

O código do erro no formato snake_case.

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
name: string = 'MCPAuthConfigError';
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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`prepareStackTrace`](/references/js/classes/MCPAuthError.md#preparestacktrace)

***

### stackTraceLimit {#stacktracelimit}

```ts
static stackTraceLimit: number;
```

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

#### Herdado de {#inherited-from}

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`toJson`](/references/js/classes/MCPAuthError.md#tojson)

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

[`MCPAuthError`](/references/js/classes/MCPAuthError.md).[`captureStackTrace`](/references/js/classes/MCPAuthError.md#capturestacktrace)