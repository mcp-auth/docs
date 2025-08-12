---
sidebar_label: handleBearerAuth
---

# Función: handleBearerAuth()

```ts
function handleBearerAuth(param0: BearerAuthConfig): RequestHandler;
```

Crea una función middleware para manejar la autenticación Bearer en una aplicación Express.

Este middleware extrae el token Bearer del encabezado `Authorization`, lo verifica usando la función
`verifyAccessToken` proporcionada y comprueba el emisor (Issuer), la audiencia (Audience) y los alcances (Scopes) requeridos.

- Si el token es válido, añade la información de autenticación al atributo `request.auth`;
si no, responde con un mensaje de error apropiado.
- Si la verificación del token de acceso (Access token) falla, responde con un error 401 No autorizado.
- Si el token no tiene los alcances (Scopes) requeridos, responde con un error 403 Prohibido.
- Si ocurren errores inesperados durante el proceso de autenticación (Authentication), el middleware los volverá a lanzar.

**Nota:** El objeto `request.auth` contendrá campos extendidos en comparación con la interfaz estándar
AuthInfo definida en el módulo `@modelcontextprotocol/sdk`. Consulta la interfaz extendida en este archivo para más detalles.

## Parámetros {#parameters}

### param0 {#param0}

[`BearerAuthConfig`](/references/js/type-aliases/BearerAuthConfig.md)

Configuración para el manejador de autenticación Bearer.

## Retorna {#returns}

`RequestHandler`

Una función middleware para Express que maneja la autenticación Bearer.

## Consulta {#see}

[BearerAuthConfig](/references/js/type-aliases/BearerAuthConfig.md) para las opciones de configuración.