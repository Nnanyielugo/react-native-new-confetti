# react-native-new-confetti

Confetti package created with reanimated v3 and no other external dependencies.

## Installation

```sh
npm install react-native-new-confetti
```

### Additional Requirements

You also need to install reanimated.
On a `creact-react-native` app, this as easy as running:

```sh
npm install react-native-reanimated
```

If you're using `expo` however, you should instead do:

```sh
npx expo install react-native-reanimated
```

## Usage

```js
import { useState } from 'react';
import Confetti from 'react-native-new-confetti';

// ...

const [confettiActive, setConfettiActive] = React.useState(false);

// ...

<Confetti
  run={confettiActive}
  onConfettiRunFinished={() => {
    setConfettiActive(false);
  }}
/>;
```

## Props

| Name                    | Required | Default Value                                                                                       | Description                                                                                             |
| ----------------------- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `run`                   | No       | false                                                                                               | Whether the confetti should run or not.                                                                 |
| `onConfettiRunFinished` | Yes      |                                                                                                     | Function that runs after the confetti animation had finished. This is where you set your run to false.. |
| `confettiColors`        | No       | ['#54d1fe', '#FF0000', '#2d93ad', '#000000', '#00FF00', '#ffd639', '#0a0b3d', '#ea6645', '#39ffa0'] | Color range of confetti pieces.                                                                         |
| `confettiSizeBand`      | No       | [10, 19]                                                                                            | A size range of for confetti pieces.                                                                    |
| `confettiImage`         | No       | N/A                                                                                                 | Image for your confetti animation. Can be anything really.                                              |
| `yBand`                 | No       | Between -1000 to -100 for each confetti piece.                                                      | How far off the top of the screen you want the confetti items to begin.                                 |
| `timeoutThreshold`      | No       | 10000ms                                                                                             | How long you want your confetti animation to run for.                                                   |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
