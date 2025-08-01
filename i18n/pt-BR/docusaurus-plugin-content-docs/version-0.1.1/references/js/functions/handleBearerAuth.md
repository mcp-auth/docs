---
sidebar_label: handleBearerAuth
---

# Função: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Cria uma função middleware para lidar com autenticação Bearer em uma aplicação Express.

Este middleware extrai o token Bearer do cabeçalho `Authorization`, verifica-o usando a função
`verifyAccessToken` fornecida e checa o emissor (Issuer), público (Audience) e escopos (Scopes) necessários.

- Se o token for válido, adiciona as informações de autenticação à propriedade `request.auth`;
caso contrário, responde com uma mensagem de erro apropriada.
- Se a verificação do token de acesso (Access token) falhar, responde com um erro 401 Não autorizado.
- Se o token não possuir os escopos (Scopes) necessários, responde com um erro 403 Proibido.
- Se ocorrerem erros inesperados durante o processo de autenticação (Authentication), o middleware irá relançá-los.

**Nota:** O objeto `request.auth` conterá campos estendidos em comparação com a interface padrão
AuthInfo definida no módulo `@modelcontextprotocol/sdk`. Veja a interface estendida neste arquivo para mais detalhes.

## Parâmetros {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Configuração para o manipulador de autenticação Bearer.

## Retorno {#returns}

`RequestHandler`

Uma função middleware para Express que lida com autenticação Bearer.

## Veja também {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para as opções de configuração.