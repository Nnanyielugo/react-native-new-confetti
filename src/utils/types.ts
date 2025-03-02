import type { ImageSourcePropType } from 'react-native';

export type BaseProps = {
  /**
   * @description whether the confetti should run or not
   * @default false
   */
  run?: boolean;
  /**
   * @description function that runs after the confetti animation had finished. This is where you set your run to false.
   * @returns void
   */
  onConfettiRunFinished: () => void;
  /**
   * @description a size range of for confetti pieces.
   * @default[10, 19]
   */
  confettiSizeBand?: [number, number];
  /**
   * @description number of confetti items you want to appear
   * @default 100
   */
  numConfetti?: number;
  /**
   * @description image for your confetti animation. Can be anything really.
   * @default regular confetti piece
   */
  confettiImage?: ImageSourcePropType;
  /**
   * @description how far off the top of the screen you want the confetti items to begin.
   * @default a random number between -1000 to -100 for each confetti piece.
   */
  yBand?: number;
  /**
   * @description how long you want your confetti animation to run for.
   * @default 10000ms
   */
  timeoutThreshold?: number;
};

export interface MoneyConfettiProps extends BaseProps {}

export interface DefaultConfettiProps extends BaseProps {
  /**
   * @description color range of confetti pieces.
   * @default[
      '#54d1fe',
      '#FF0000',
      '#2d93ad',
      '#000000',
      '#00FF00',
      '#ffd639',
      '#0a0b3d',
      '#ea6645',
      '#39ffa0',
      ];
   */
  confettiColors?: string[];
}

export interface CustomConfettiProps extends BaseProps {
  withColors?: boolean;
  confettiColors?: string[];
  withHeight?: boolean;
  withWidth?: boolean;
}

export type AnimatedPieceProps = {
  x: number;
  y: number;
  rotate: number;
  color?: string;
  xVel: number;
  yVel: number;
  elasticity: number;
  image: ImageSourcePropType;
  size: number;
  withHeight?: boolean;
  withWidth?: boolean;
  withTintColor?: boolean;
};

export type ConfettiItems = {
  key: number;
  x: number;
  y: number;
  rotate: number;
  color?: string;
  xVel: number;
  yVel: number;
  elasticity: number;
  size: number;
};
