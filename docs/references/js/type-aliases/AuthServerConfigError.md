---
sidebar_label: AuthServerConfigError
---

# Type Alias: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

Represents an error that occurs during the validation of the authorization server metadata.

## Properties {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

An optional cause of the error, typically an instance of `Error` that provides more context.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

The code representing the specific validation error.

***

### description {#description}

```ts
description: string;
```

A human-readable description of the error.
