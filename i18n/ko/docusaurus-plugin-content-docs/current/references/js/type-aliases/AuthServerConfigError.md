---
sidebar_label: AuthServerConfigError
---

# 타입 별칭: AuthServerConfigError

```ts
type AuthServerConfigError = {
  cause?: Error;
  code: AuthServerConfigErrorCode;
  description: string;
};
```

인가 (Authorization) 서버 메타데이터의 검증 중에 발생하는 오류를 나타냅니다.

## 속성 {#properties}

### cause? {#cause}

```ts
optional cause: Error;
```

오류의 선택적 원인으로, 일반적으로 더 많은 맥락을 제공하는 `Error` 인스턴스입니다.

***

### code {#code}

```ts
code: AuthServerConfigErrorCode;
```

특정 검증 오류를 나타내는 코드입니다.

***

### description {#description}

```ts
description: string;
```

오류에 대한 사람이 읽을 수 있는 설명입니다.
