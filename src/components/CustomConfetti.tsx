import { useCallback, useEffect, useState } from 'react';
import ConfettiImage from '../assets/dollar.png';

import { StyleSheet, View } from 'react-native';
import AnimatedPiece from '../components/AnimatedPiece';
import {
  createConfettiWithoutColors,
  createConfetti,
} from '../utils/functions';
import { runOnJS } from 'react-native-reanimated';
import {
  CONFETTI_COLORS,
  CONFETTI_SIZE_BAND,
  NUM_CONFETTI,
  TIMEOUT_THRESHOLD,
  Y_BAND,
} from '../utils/constants';
import type { ConfettiItems, CustomConfettiProps } from '../utils/types';

const CustomConfetti = ({
  confettiSizeBand = CONFETTI_SIZE_BAND,
  numConfetti = NUM_CONFETTI,
  confettiImage = ConfettiImage,
  yBand = Y_BAND,
  run = true,
  timeoutThreshold = TIMEOUT_THRESHOLD,
  confettiColors = CONFETTI_COLORS,
  onConfettiRunFinished,
  withColors = false,
  withHeight = false,
  withWidth = false,
}: CustomConfettiProps) => {
  const [confettiItems, createConfettiItems] = useState<ConfettiItems[]>([]);
  const [timing, setTiming] = useState(0);

  const start = useCallback(() => {
    if (withColors) {
      createConfettiItems(
        createConfetti(confettiSizeBand, numConfetti, confettiColors, yBand)
      );
    } else {
      createConfettiItems(
        createConfettiWithoutColors(confettiSizeBand, numConfetti, yBand)
      );
    }
  }, [confettiSizeBand, numConfetti, confettiColors, yBand, withColors]);

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
        ({ key, x, y, rotate, xVel, elasticity, yVel, size, color }) => (
          <AnimatedPiece
            key={key}
            x={x}
            y={y}
            rotate={rotate}
            image={confettiImage}
            xVel={xVel}
            color={color}
            elasticity={elasticity}
            yVel={yVel}
            size={size}
            withHeight={withHeight}
            withWidth={withWidth}
            withTintColor={withColors}
          />
        )
      )}
    </View>
  );
};

export default CustomConfetti;
