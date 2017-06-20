## Bug Demonstration: ts-node#365

This demonstrates the issue discussed in [ts-node#365][issue], namely that Sinon breaks whatever
test suite it's used in, without error.

1. Installation
```bash
$ npm install
```

2. Run using ts-node
```
$ npm test
```

This should report:

```
stubbing aModule
  normal behaviour
    ✓ returns herpa-derpa
  stubbed behaviour
    1) "before each" hook for "returns boo-urns"
    2) "after each" hook for "returns boo-urns"


1 passing (23ms)
2 failing
```

3. Transpile and run as vanilla NodeJS
```
$ npm run test-js
```

This should report:
```
stubbing aModule
  normal behaviour
    ✓ returns herpa-derpa
  stubbed behaviour
    ✓ returns boo-urns


2 passing (18ms)
```

[issue]: https://github.com/TypeStrong/ts-node/issues/365
