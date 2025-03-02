import { Dimensions } from 'react-native';
import type { ConfettiItems } from './types';

export function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export function createConfetti(
  sizeBand: [number, number],
  numConfettis: number,
  colors: string[],
  yBand: number
): ConfettiItems[] {
  const { width: screenWidth } = Dimensions.get('screen');

  return [...new Array(numConfettis)].map((_, i) => {
    const size = randomBetween(...sizeBand);

    return {
      key: i,
      // Spawn confetti from two different sources, a quarter
      // from the left and a quarter from the right edge of the screen.
      x: screenWidth * (i % 2 ? 0.25 : 0.75) - size / 2,
      y: yBand,
      rotate: randomBetween(-360, 360),
      color: colors[i % colors.length] as string,
      xVel: Math.random() * 400 - 200,
      yVel: Math.random() * 150 + 150,
      elasticity: Math.random() * 0.3 + 0.1,
      size,
    };
  });
}

export function createConfettiWithoutColors(
  sizeBand: [number, number],
  numConfettis: number,
  yBand: number
): ConfettiItems[] {
  const { width: screenWidth } = Dimensions.get('screen');

  return [...new Array(numConfettis)].map((_, i) => {
    const size = randomBetween(...sizeBand);

    return {
      key: i,
      // Spawn confetti from two different sources, a quarter
      // from the left and a quarter from the right edge of the screen.
      x: screenWidth * (i % 2 ? 0.25 : 0.75) - size / 2,
      y: yBand,
      rotate: randomBetween(-360, 360),
      xVel: Math.random() * 400 - 200,
      yVel: Math.random() * 150 + 150,
      elasticity: Math.random() * 0.3 + 0.1,
      size,
    };
  });
}
