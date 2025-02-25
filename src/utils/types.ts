import type { ImageSourcePropType } from 'react-native';

export type ConfettiProps = {
  confettiColors?: string[];
  confettiSizeBand?: [number, number];
  numConfetti?: number;
  confettiImage?: ImageSourcePropType;
  yBand?: number;
  run?: boolean;
  onConfettiRunFinished?: () => void; // set run to false here
  timeoutThreshold?: number;
};

export type AnimatedPieceProps = {
  x: number;
  y: number;
  rotate: number;
  color: string;
  xVel: number;
  yVel: number;
  elasticity: number;
  image: ImageSourcePropType;
  size: number;
};

export type ConfettiItems = {
  key: number;
  x: number;
  y: number;
  rotate: number;
  color: string;
  xVel: number;
  yVel: number;
  elasticity: number;
  size: number;
};
