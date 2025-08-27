import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
  View,
} from 'react-native';
import { Svg, Path } from 'react-native-svg';

export const FavoriteButton = ({ isFavorite, onPress, loading = false }) => {
  const scaleValue = new Animated.Value(1);

  const handlePress = () => {
    // Animación de escala al presionar
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  const HeartEmpty = () => (
    <Svg width={28} height={28} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path
        fill="#ff6b6b"
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm-3.566 15.604c.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 2.944 1.666 5.533 4.645 7.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571z"
      />
    </Svg>
  );

  const HeartFilled = () => (
    <Svg width={28} height={28} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0H24V24H0z" />
      <Path
        fill="#ff6b6b"
        d="M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5C9.5 20 2 16 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2z"
      />
    </Svg>
  );

  return (
    <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
      <TouchableOpacity
        style={[
          styles.button,
          isFavorite ? styles.buttonFavorite : styles.buttonNormal,
        ]}
        onPress={handlePress}
        disabled={loading}
        activeOpacity={0.8}
      >
        <View style={styles.iconContainer}>
          {isFavorite ? <HeartFilled /> : <HeartEmpty />}
        </View>
        <Text
          style={[
            styles.buttonText,
            isFavorite ? styles.textFavorite : styles.textNormal,
          ]}
        >
          {loading
            ? 'Updating...'
            : isFavorite
            ? 'Remove from Favorites'
            : 'Add to Favorites'}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 24,
    borderWidth: 2,
    minWidth: 200,
    shadowColor: '#bfa980',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
    backgroundColor: '#f9f6f2',
    marginVertical: 8,
  },
  buttonNormal: {
    backgroundColor: '#ede3d2',
    borderColor: '#bfa980',
  },
  buttonFavorite: {
    backgroundColor: '#e7d3b0',
    borderColor: '#a67c52',
  },
  iconContainer: {
    marginRight: 12,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: 'serif',
    color: '#5a4632',
    letterSpacing: 1.2,
  },
  textNormal: {
    color: '#7c6f57',
  },
  textFavorite: {
    color: '#a67c52',
  },
});
