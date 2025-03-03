import {
  // CustomConfetti,
  // MoneyConfetti,
  SnowFlakeConfetti,
  // HeartConfetti,
} from 'react-native-new-confetti';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import ConfettiImage from '../assets/kudos.png';
import React from 'react';

type ButtonProps = {
  onPress: () => any;
  active: boolean;
};
const Button = ({ onPress, active }: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          styles.buttonContainer,
          active && { backgroundColor: '#D9FFC9' },
        ]}
      >
        <Text>{active ? 'Active' : 'Press'}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function App() {
  const [confettiActive, setConfettiActive] = React.useState(false);
  return (
    <View style={styles.container}>
      <Button active={confettiActive} onPress={() => setConfettiActive(true)} />
      <SnowFlakeConfetti
        run={confettiActive}
        // confettiImage={ConfettiImage}
        onConfettiRunFinished={() => {
          setConfettiActive(false);
        }}
        // yBand={[-3000 , -100]}
        // confettiSizeBand={[5, 10]}
        // withColors
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'white',
    backgroundColor: '#363956',
  },
  buttonContainer: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
