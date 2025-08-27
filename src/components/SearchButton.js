import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Animated } from 'react-native';

export const SearchButton = ({
  onPress,
  disabled = false,
  loading = false,
}) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.05,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
    onPress();
  };

  return (
    <Animated.View
      style={[styles.container, { transform: [{ scale: scaleValue }] }]}
    >
      <TouchableOpacity
        style={[styles.button, disabled && styles.buttonDisabled]}
        onPress={handlePress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        activeOpacity={0.8}
      >
        <Text
          style={[styles.buttonText, disabled && styles.buttonTextDisabled]}
        >
          {loading ? 'SEARCHING...' : 'SEARCH'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#bfa980',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 6,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#bfa980',
    backgroundColor: '#f9f6f2',
    marginVertical: 8,
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    backgroundColor: '#ede3d2',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 140,
    borderWidth: 1,
    borderColor: '#bfa980',
  },
  buttonDisabled: {
    backgroundColor: '#e0d6c3',
    opacity: 0.7,
  },
  buttonText: {
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontWeight: '700',
    color: '#5a4632',
    fontFamily: 'serif',
  },
  buttonTextDisabled: {
    color: '#bfa980',
  },
});
