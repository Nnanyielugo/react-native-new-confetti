# react-native-new-confetti
[![NPM](https://img.shields.io/npm/v/react-native-new-confetti?logo=npm)](https://www.npmjs.com/package/react-native-new-confetti)

Confetti package created with reanimated v3 and also provides a few other confetti types out of the box.

#### iOS

CustomConfetti | SnowFlakeConfetti | HeartConfetti | MoneyConfetti | CustomWithKudos
--|--|--|--|--
<img src="https://github.com/user-attachments/assets/98aee419-4743-45ad-9c3d-e72050f55e23" width=170 /> | <img src="https://github.com/user-attachments/assets/1916b888-d5e3-4dfc-b091-58ff3e4fdc54" width=170 /> | <img src="https://github.com/user-attachments/assets/35e0f89a-6b92-4b4c-9ad3-e95d3f237ee2" width=170 /> | <img src="https://github.com/user-attachments/assets/7bc5a9b5-58ee-45cc-8a1c-6aa34eecf6cd" width=170 /> | <img src="https://github.com/user-attachments/assets/21ca02b1-f725-496c-bc8d-11c16db4ec2c" width=170 />


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

**Note:** Same implementation as _HeartConfetti_ and _SnowFlakeConfetti_, just switch the imports.

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
**Note:** _MoneyConfetti_, _SnowFlakeConfetti_ and _HeartConfetti_ use the exact same props as BaseProps.

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
