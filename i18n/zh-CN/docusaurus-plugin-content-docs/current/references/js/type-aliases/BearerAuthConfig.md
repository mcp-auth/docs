---
sidebar_label: BearerAuthConfig
---

# 类型别名：BearerAuthConfig

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

## 属性 {#properties}

### audience? {#audience}

```ts
optional audience: string;
```

访问令牌 (Access token) 的预期受众 (Audience)（`aud` 声明 (Claim)）。这通常是令牌所针对的资源服务器（API）。如果未提供，将跳过受众 (Audience) 检查。

**注意：** 如果你的授权服务器 (Authorization server) 不支持资源指示器 (Resource Indicators)（RFC 8707），你可以省略此字段，因为受众 (Audience) 可能并不相关。

#### 参见 {#see}

https://datatracker.ietf.org/doc/html/rfc8707

***

### issuer {#issuer}

```ts
issuer: 
  | string
  | ValidateIssuerFunction;
```

表示有效发行者 (Issuer) 的字符串，或用于验证访问令牌 (Access token) 发行者 (Issuer) 的函数。

如果提供字符串，则将其用作预期的发行者 (Issuer) 值进行直接比较。

如果提供函数，则应根据 [ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) 中的规则验证发行者 (Issuer)。

#### 参见 {#see}

[ValidateIssuerFunction](/references/js/type-aliases/ValidateIssuerFunction.md) 了解有关验证函数的更多细节。

***

### requiredScopes? {#requiredscopes}

```ts
optional requiredScopes: string[];
```

访问令牌 (Access token) 必须包含的权限 (Scopes) 数组。如果令牌未包含所有这些权限 (Scopes)，将抛出错误。

**注意：** 处理器将检查令牌中的 `scope` 声明 (Claim)，该声明 (Claim) 可能是以空格分隔的字符串或字符串数组，具体取决于授权服务器 (Authorization server) 的实现。如果未包含 `scope` 声明 (Claim)，处理器将检查 `scopes` 声明 (Claim)（如果可用）。

***

### resource? {#resource}

```ts
optional resource: string;
```

受保护资源的标识符。当提供该字段时，处理器将使用为此资源配置的授权服务器 (Authorization server) 验证收到的令牌。在使用带有 `protectedResources` 配置的处理器时是必需的。

***

### showErrorDetails? {#showerrordetails}

```ts
optional showErrorDetails: boolean;
```

是否在响应中显示详细的错误信息。这对于开发期间调试很有用，但在生产环境中应禁用，以避免泄露敏感信息。

#### 默认值 {#default}

```ts
false
```

***

### verifyAccessToken {#verifyaccesstoken}

```ts
verifyAccessToken: VerifyAccessTokenFunction;
```

用于验证访问令牌 (Access token) 的函数类型。

如果令牌无效，此函数应抛出 [MCPAuthTokenVerificationError](/references/js/classes/MCPAuthTokenVerificationError.md)；如果令牌有效，则返回 AuthInfo 对象。

#### 参见 {#see}

[VerifyAccessTokenFunction](/references/js/type-aliases/VerifyAccessTokenFunction.md) 了解更多细节。
