import { API_CONFIG } from '../utils/config';

export class GoogleBooksAPI {
  static async searchBooks(query) {
    try {
      const url = `${API_CONFIG.GOOGLE_BOOKS_BASE_URL}?q=${encodeURIComponent(query)}&key=${API_CONFIG.GOOGLE_BOOKS_API_KEY}&maxResults=${API_CONFIG.MAX_RESULTS}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data.items ? data.items.map(this.formatBookData) : [];
    } catch (error) {
      console.error('Error searching books:', error);
      throw error;
    }
  }

  static async getBookDetails(bookId) {
    try {
      const url = `${API_CONFIG.GOOGLE_BOOKS_BASE_URL}/${bookId}?key=${API_CONFIG.GOOGLE_BOOKS_API_KEY}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      return this.formatBookData(data);
    } catch (error) {
      console.error('Error getting book details:', error);
      throw error;
    }
  }

  static formatBookData(item) {
    const volumeInfo = item.volumeInfo || {};
    const imageLinks = volumeInfo.imageLinks || {};
    
    return {
      id: item.id,
      title: volumeInfo.title || 'No title available',
      authors: volumeInfo.authors || ['Unknown author'],
      description: volumeInfo.description || 'No description available',
      publishedDate: volumeInfo.publishedDate || 'Unknown date',
      publisher: volumeInfo.publisher || 'Unknown publisher',
      pageCount: volumeInfo.pageCount || 0,
      categories: volumeInfo.categories || [],
      averageRating: volumeInfo.averageRating || 0,
      ratingsCount: volumeInfo.ratingsCount || 0,
      thumbnail: imageLinks.thumbnail || imageLinks.smallThumbnail || null,
      previewLink: volumeInfo.previewLink || null,
      infoLink: volumeInfo.infoLink || null,
      language: volumeInfo.language || 'Unknown',
      isbn: volumeInfo.industryIdentifiers ? 
        volumeInfo.industryIdentifiers.find(id => id.type === 'ISBN_13')?.identifier ||
        volumeInfo.industryIdentifiers.find(id => id.type === 'ISBN_10')?.identifier ||
        'No ISBN'
        : 'No ISBN'
    };
  }
}
