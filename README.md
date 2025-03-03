# react-native-new-confetti

Confetti package created with reanimated v3 and also provides a few other confetti types out of the box.

#### iOS

https://github.com/user-attachments/assets/f8fe0459-bdb9-47b7-91b1-ef0055c3ab70

#### Android

_Android demo videos coming soon_

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

#### Default Confetti

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

#### MoneyConfetti

**Note** Same implementation as **_HeartConfetti_** and **_SnowFlakeConfetti_**, just switch the imports.

```js
// ...
import { MoneyConfetti } from 'react-native-new-confetti';
// ...

<MoneyConfetti
  run={confettiActive}
  onConfettiRunFinished={() => {
    setConfettiActive(false);
  }}
/>;
```

#### CustomConfetti

```js
// ...
import { MoneyConfetti } from 'react-native-new-confetti';
import YourCustomImage from 'path-to-your-custom-image';
// ...

<MoneyConfetti
  run={confettiActive}
  confettiImage={YourCustomImage}
  onConfettiRunFinished={() => {
    setConfettiActive(false);
  }}
/>;
```

## Props

#### Base Props

All confetti types accept these properties.
**Note** MoneyConfetti, SnowFlakeConfetti and HeartConfetti use the exact same props as BaseProps.

| Name                    | Required | Default Value | Description                                                                                            |
| ----------------------- | -------- | ------------- | ------------------------------------------------------------------------------------------------------ |
| `run`                   | No       | false         | Whether the confetti should run or not.                                                                |
| `onConfettiRunFinished` | Yes      |               | Function that runs after the confetti animation had finished. This is where you set your run to false. |
| `confettiSizeBand`      | No       | [10, 19]      | A size range of for confetti pieces.                                                                   |
| `yBand`                 | No       | [-500, -100]  | How far off the top of the screen you want the confetti items to begin.                                |
| `timeoutThreshold`      | No       | 10000ms       | How long you want your confetti animation to run for.                                                  |

#### Default Confetti Props

Inherits from Base Props and accepts the following additional props:

| Name             | Required | Default Value                                                                                       | Description                     |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------------- |
| `confettiColors` | No       | ['#54d1fe', '#FF0000', '#2d93ad', '#000000', '#00FF00', '#ffd639', '#0a0b3d', '#ea6645', '#39ffa0'] | Color range of confetti pieces. |

#### Custom Confetti Props

Inherits from Base Props and accepts the following additional props:

| Name             | Required | Default Value                                                                                       | Description                                                                                                        |
| ---------------- | -------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `withColors`     | no       | false                                                                                               | Indicates whether your confetti should expect to apply colours to your confetti items. false..                     |
| `confettiColors` | No       | ['#54d1fe', '#FF0000', '#2d93ad', '#000000', '#00FF00', '#ffd639', '#0a0b3d', '#ea6645', '#39ffa0'] | Color range of confetti pieces.                                                                                    |
| `confettiImage`  | No       | N/A                                                                                                 | Image for your confetti animation. Can be anything really.                                                         |
| `withHeight`     | No       | false                                                                                               | Indicates that you want your confetti pieces to be taller than they are wide, like in a height oriented rectangle. |
| `withWidth`      | No       | false                                                                                               | Indicates that you want your confetti pieces to be wider than they are tall, like in a regular rectangle.          |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
