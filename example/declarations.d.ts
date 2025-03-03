declare global {
  declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';

    const path: ImageSourcePropType;
    export default path;
  }

  // there's probably a more concise way of doing this, but this solves the problem for now.
  declare module '*.jpg' {
    import { ImageSourcePropType } from 'react-native';

    const path: ImageSourcePropType;
    export default path;
  }

  declare module '*.mp3' {
    import { ImageSourcePropType } from 'react-native';

    const path: ImageSourcePropType;
    export default path;
  }
}

// Hack: https://stackoverflow.com/a/62011156/10076418
export {};
