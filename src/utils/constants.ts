import { randomBetween } from './functions';

export const NUM_CONFETTI = 100;
export const CONFETTI_COLORS = [
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
export const CONFETTI_SIZE_BAND: [number, number] = [10, 19];
export const Y_BAND = randomBetween(-1000, -100);
export const TIMEOUT_THRESHOLD = 10000;
