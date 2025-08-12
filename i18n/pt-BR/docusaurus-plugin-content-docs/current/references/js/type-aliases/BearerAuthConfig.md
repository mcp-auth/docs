---
sidebar_label: BearerAuthConfig
---

# Alias de Tipo: BearerAuthConfig

```ts
type BearerAuthConfig = {
  audience?: string;
  issuer:   | string
     | ValidateIssuerFunction;
  requiredScopes?: string[];
  resource?: string;
  showErrorDetails?: boolean;
  verifyAccessToken: VerifyAccessTokenFunction;
};
```

## Propriedades {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

O público (Audience) esperado do token de acesso (`aud` claim). Normalmente, este é o servidor de recursos
(API) para o qual o token se destina. Se não for fornecido, a verificação do público será ignorada.

**Nota:** Se o seu servidor de autorização não suporta Indicadores de Recurso (Resource Indicators) (RFC 8707),
você pode omitir este campo, pois o público pode não ser relevante.

#### Veja {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

Uma string representando um emissor (Issuer) válido, ou uma função para validar o emissor do token de acesso.

Se uma string for fornecida, ela será usada como o valor esperado do emissor para comparação direta.

Se uma função for fornecida, ela deve validar o emissor de acordo com as regras em
[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md).

#### Veja {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) para mais detalhes sobre a função de validação.

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

Um array de escopos (Scopes) obrigatórios que o token de acesso deve possuir. Se o token não contiver
todos esses escopos, um erro será lançado.

**Nota:** O handler verificará a reivindicação `scope` no token, que pode ser uma string separada por espaços
ou um array de strings, dependendo da implementação do servidor de autorização. Se a reivindicação `scope` não estiver presente, o handler verificará a reivindicação `scopes`
se disponível.

***

### resource? {#resource}

```ts
optional resource: string;
```

O identificador do recurso protegido. Quando fornecido, o handler usará os
servidores de autorização configurados para este recurso para validar o token recebido.
É obrigatório ao usar o handler com uma configuração `protectedResources`.

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

Indica se deve mostrar informações detalhadas de erro na resposta. Isso é útil para depuração
durante o desenvolvimento, mas deve ser desabilitado em produção para evitar vazamento de informações sensíveis.

#### Padrão {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

Tipo de função para verificar um token de acesso (Access token).

Esta função deve lançar um [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md) se o token for inválido,
ou retornar um objeto AuthInfo se o token for válido.

#### Veja {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) para mais detalhes.