import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export const BookCard = ({ book, onPress }) => {
  const authorsText = Array.isArray(book.authors)
    ? book.authors.join(', ')
    : book.authors;

  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(book)}>
      <View style={styles.imageContainer}>
        {book.thumbnail ? (
          <Image
            source={{ uri: book.thumbnail }}
            style={styles.thumbnail}
            resizeMode="cover"
          />
        ) : (
          <View style={styles.noImageContainer}>
            <Text style={styles.noImageText}>No Image</Text>
          </View>
        )}
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {book.title}
        </Text>
        <Text style={styles.authors} numberOfLines={1}>
          {authorsText}
        </Text>
        {book.publishedDate && (
          <Text style={styles.publishedDate}>{book.publishedDate}</Text>
        )}
        {book.averageRating > 0 && (
          <Text style={styles.rating}>
            ⭐ {book.averageRating.toFixed(1)} ({book.ratingsCount})
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f9f6f2', // pergamino
    borderRadius: 14,
    marginVertical: 10,
    marginHorizontal: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: '#bfa980', // dorado suave
    shadowColor: '#bfa980',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },
  imageContainer: {
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#bfa980',
    borderRadius: 8,
    backgroundColor: '#ede3d2',
    padding: 2,
  },
  thumbnail: {
    width: 60,
    height: 90,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#bfa980',
  },
  noImageContainer: {
    width: 60,
    height: 90,
    backgroundColor: '#ede3d2',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#bfa980',
  },
  noImageText: {
    fontSize: 12,
    color: '#bfa980',
    textAlign: 'center',
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5a4632',
    marginBottom: 4,
    fontFamily: 'serif',
    letterSpacing: 1.2,
  },
  authors: {
    fontSize: 14,
    color: '#7c6f57',
    marginBottom: 4,
    fontFamily: 'serif',
    fontStyle: 'italic',
  },
  publishedDate: {
    fontSize: 12,
    color: '#bfa980',
    marginBottom: 4,
    fontFamily: 'serif',
  },
  rating: {
    fontSize: 13,
    color: '#bfa980',
    fontWeight: '600',
    fontFamily: 'serif',
  },
});
