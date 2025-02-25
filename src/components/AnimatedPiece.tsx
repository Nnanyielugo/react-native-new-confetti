import { useEffect } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useFrameCallback,
  useSharedValue,
} from 'react-native-reanimated';
import type { AnimatedPieceProps } from '../utils/types';

const AnimatedPiece = ({
  x,
  y,
  rotate,
  color,
  xVel,
  yVel,
  elasticity,
  image,
  size,
}: AnimatedPieceProps) => {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('screen');
  const sharedX = useSharedValue(x);
  const sharedXVel = useSharedValue(xVel);
  const sharedAngle = useSharedValue(rotate);
  const sharedY = useSharedValue(y);

  const frameCallback = useFrameCallback(() => {
    const dt = 0.01;
    const dy = 0.025 * yVel;
    const dx = dt * sharedXVel.value;
    const dAng = 0.003 * sharedAngle.value;
    sharedX.value = sharedX.value + dx;
    sharedAngle.value = sharedAngle.value + dAng;

    if (sharedX.value > screenWidth - size) {
      sharedX.value = screenWidth - size;
      sharedXVel.value = sharedXVel.value * -elasticity;
    } else if (sharedX.value < 0) {
      sharedX.value = 0;
      sharedXVel.value = sharedXVel.value * -elasticity;
    }

    if (sharedY.value < screenHeight) {
      sharedY.value = sharedY.value + dy;
    }
  }, false);

  useEffect(() => {
    frameCallback.setActive(true);
    return () => frameCallback.setActive(false);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: sharedX.value },
        { translateY: sharedY.value },
        { rotate: `${sharedAngle.value}deg` },
        { rotateX: `${sharedAngle.value}deg` },
        { rotateY: `${sharedAngle.value}deg` },
      ],
    };
  });
  return (
    <Animated.View style={[styles.confettiContainer, animatedStyle]}>
      <Image
        source={image}
        style={{ width: size, height: size, zIndex: 999 }}
        tintColor={color}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  confettiContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default AnimatedPiece;
