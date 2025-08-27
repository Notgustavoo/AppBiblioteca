import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  Linking,
  Dimensions,
} from 'react-native';
import { FavoritesService } from '../services/favoritesService';
import { FavoriteButton } from '../components/FavoriteButton';

const { width } = Dimensions.get('window');

export const BookDetailsScreen = ({ route, navigation }) => {
  const { book } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkFavoriteStatus();
  }, []);

  const checkFavoriteStatus = async () => {
    try {
      const favoriteStatus = await FavoritesService.isFavorite(book.id);
      setIsFavorite(favoriteStatus);
    } catch (error) {
      console.error('Error checking favorite status:', error);
    }
  };

  const toggleFavorite = async () => {
    setLoading(true);
    try {
      if (isFavorite) {
        await FavoritesService.removeFromFavorites(book.id);
        setIsFavorite(false);
        Alert.alert('Success', 'Book removed from favorites');
      } else {
        await FavoritesService.addToFavorites(book);
        setIsFavorite(true);
        Alert.alert('Success', 'Book added to favorites');
      }
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to update favorites');
    } finally {
      setLoading(false);
    }
  };

  const openPreview = () => {
    if (book.previewLink) {
      Linking.openURL(book.previewLink);
    } else {
      Alert.alert('Not Available', 'Preview not available for this book');
    }
  };

  const openInfo = () => {
    if (book.infoLink) {
      Linking.openURL(book.infoLink);
    } else {
      Alert.alert('Not Available', 'More info not available for this book');
    }
  };

  const authorsText = Array.isArray(book.authors) ? book.authors.join(', ') : book.authors;
  const categoriesText = Array.isArray(book.categories) ? book.categories.join(', ') : book.categories;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.bookHeader}>
          <View style={styles.imageContainer}>
            {book.thumbnail ? (
              <Image 
                source={{ uri: book.thumbnail.replace('http:', 'https:') }} 
                style={styles.bookImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.noImageContainer}>
                <Text style={styles.noImageText}>No Image Available</Text>
              </View>
            )}
          </View>

          <View style={styles.bookInfo}>
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.authors}>{authorsText}</Text>
            
            {book.averageRating > 0 && (
              <View style={styles.ratingContainer}>
                <Text style={styles.rating}>
                  ⭐ {book.averageRating.toFixed(1)}
                </Text>
                <Text style={styles.ratingsCount}>
                  ({book.ratingsCount} reviews)
                </Text>
              </View>
            )}

            <FavoriteButton
              isFavorite={isFavorite}
              onPress={toggleFavorite}
              loading={loading}
            />
          </View>
        </View>

        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Publisher:</Text>
            <Text style={styles.detailValue}>{book.publisher}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Published:</Text>
            <Text style={styles.detailValue}>{book.publishedDate}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Pages:</Text>
            <Text style={styles.detailValue}>{book.pageCount || 'N/A'}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Language:</Text>
            <Text style={styles.detailValue}>{book.language.toUpperCase()}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>ISBN:</Text>
            <Text style={styles.detailValue}>{book.isbn}</Text>
          </View>

          {categoriesText && categoriesText !== '' && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Categories:</Text>
              <Text style={styles.detailValue}>{categoriesText}</Text>
            </View>
          )}
        </View>

        {book.description && (
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{book.description}</Text>
          </View>
        )}

        <View style={styles.actionButtons}>
          {book.previewLink && (
            <TouchableOpacity style={styles.actionButton} onPress={openPreview}>
              <Text style={styles.actionButtonText}>📖 Preview Book</Text>
            </TouchableOpacity>
          )}

          {book.infoLink && (
            <TouchableOpacity style={styles.actionButton} onPress={openInfo}>
              <Text style={styles.actionButtonText}>ℹ️ More Info</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  backButton: {
    paddingVertical: 8,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeholder: {
    width: 50,
  },
  content: {
    flex: 1,
  },
  bookHeader: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: 160,
    height: 240,
    borderRadius: 8,
  },
  noImageContainer: {
    width: 160,
    height: 240,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageText: {
    color: '#888',
    textAlign: 'center',
  },
  bookInfo: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 8,
  },
  authors: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rating: {
    fontSize: 16,
    color: '#ff6b35',
    fontWeight: '600',
    marginRight: 8,
  },
  ratingsCount: {
    fontSize: 14,
    color: '#888',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  detailRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    width: 100,
  },
  detailValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  descriptionContainer: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },
  actionButtons: {
    marginTop: 12,
    paddingHorizontal: 20,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomPadding: {
    height: 20,
  },
});
