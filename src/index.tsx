import { useCallback, useEffect, useState } from 'react';
import ConfettiImage from './assets/confetti.jpg';
import { StyleSheet, View } from 'react-native';
import AnimatedPiece from './components/AnimatedPiece';
import { createConfetti } from './utils/functions';
import { runOnJS } from 'react-native-reanimated';
import {
  CONFETTI_COLORS,
  CONFETTI_SIZE_BAND,
  NUM_CONFETTI,
  Y_BAND,
} from './utils/constants';
import type { ConfettiItems, ConfettiProps } from './utils/types';

const Confetti = ({
  confettiColors = CONFETTI_COLORS,
  confettiSizeBand = CONFETTI_SIZE_BAND,
  numConfetti = NUM_CONFETTI,
  confettiImage = ConfettiImage,
  yBand = Y_BAND,
  run = true,
  timeoutThreshold = 10000,
  onConfettiRunFinished = () => {},
}: ConfettiProps) => {
  const [confettiItems, createConfettiItems] = useState<ConfettiItems[]>([]);
  const [timing, setTiming] = useState(0);

  const start = useCallback(() => {
    createConfettiItems(
      createConfetti(confettiSizeBand, numConfetti, confettiColors, yBand)
    );
  }, [confettiSizeBand, numConfetti, confettiColors, yBand]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (run) {
      timer = setInterval(() => setTiming((t: number) => t + 1000), 1000);
      start();
    }

    return () => clearInterval(timer);
  }, [run, start]);

  useEffect(() => {
    if (timing === timeoutThreshold) {
      end();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timing, timeoutThreshold]);

  function end() {
    'worklet';
    runOnJS(reset)();
  }

  function reset() {
    createConfettiItems([]);
    onConfettiRunFinished();
    setTiming(0);
  }

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      {confettiItems.map(
        ({ key, x, y, rotate, color, xVel, elasticity, yVel, size }) => (
          <AnimatedPiece
            key={key}
            x={x}
            y={y}
            rotate={rotate}
            color={color}
            image={confettiImage}
            xVel={xVel}
            elasticity={elasticity}
            yVel={yVel}
            size={size}
          />
        )
      )}
    </View>
  );
};

export default Confetti;
