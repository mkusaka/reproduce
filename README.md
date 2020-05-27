# @mkusaka/reproduce

install

npm
```
npm install @mkusaka/reproduce ---save
```

yarn
```
yarn add @mkusaka/reproduce
```

# usage

```ts
import { reproduce } from "@mkusaka/reproduce"

const reducer = (state: {
  age: number,
  name: string
}, action) => {
  switch (action.type) {
    case "increment":
      // returns new object.
      // reproduce avoid to modify argument directly.
      // just as Immer's produce.
      return reproduce(state, (state) => {
        state.age++
      })
    default:
      return state
  }
}
```
