---
sidebar_label: AuthServerConfigWarning
---

# Type Alias: AuthServerConfigWarning

```ts
type AuthServerConfigWarning = {
  code: AuthServerConfigWarningCode;
  description: string;
};
```

Represents a warning that occurs during the validation of the authorization server metadata.

## Properties {#properties}

### code {#code}

```ts
code: AuthServerConfigWarningCode;
```

The code representing the specific validation warning.

***

### description {#description}

```ts
description: string;
```

A human-readable description of the warning.
