import Confetti from 'react-native-new-confetti';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
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
      <Confetti
        run={confettiActive}
        onConfettiRunFinished={() => {
          setConfettiActive(false);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonContainer: {
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
});
