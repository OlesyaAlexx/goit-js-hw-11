/* const API key = 43954842-86e0551d49d52b31999082e7b; */

export default class PixabayApi {
  constructor() {
    this.searchQuery = '';
  }

  featchPhoto() {
    console.log(this);
    const options = {
      key: '43954842-86e0551d49d52b31999082e7b',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      q: `${this.searchQuery}`,
    };

    const url = 'https://pixabay.com/api/';

    fetch(url, options)
      .then(response => response.json())
      .then(console.log);
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
