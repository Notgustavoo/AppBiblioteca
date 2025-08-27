import AsyncStorage from '@react-native-async-storage/async-storage';

const FAVORITES_KEY = '@favorites';

export class FavoritesService {
  static async getFavorites() {
    try {
      const favorites = await AsyncStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  }

  static async addToFavorites(book) {
    try {
      const favorites = await this.getFavorites();
      const isAlreadyFavorite = favorites.some(fav => fav.id === book.id);
      
      if (isAlreadyFavorite) {
        throw new Error('Book is already in favorites');
      }
      
      const updatedFavorites = [...favorites, { ...book, addedDate: new Date().toISOString() }];
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      
      return updatedFavorites;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      throw error;
    }
  }

  static async removeFromFavorites(bookId) {
    try {
      const favorites = await this.getFavorites();
      const updatedFavorites = favorites.filter(book => book.id !== bookId);
      
      await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      
      return updatedFavorites;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      throw error;
    }
  }

  static async isFavorite(bookId) {
    try {
      const favorites = await this.getFavorites();
      return favorites.some(book => book.id === bookId);
    } catch (error) {
      console.error('Error checking if book is favorite:', error);
      return false;
    }
  }

  static async clearFavorites() {
    try {
      await AsyncStorage.removeItem(FAVORITES_KEY);
      return [];
    } catch (error) {
      console.error('Error clearing favorites:', error);
      throw error;
    }
  }
}
