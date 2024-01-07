import View from './View';
import icons from '../../img/icons.svg';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = 'Success Message';

  _generateMarkup() {
    console.log('resultsview', this._data);

    return this._data.map(this._generateMarkupPreview).join('');
  }
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkupPreview(result) {
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
            <a class="preview__link ${
              result.id === id ? `Preview__link-active` : ''
            } " href="#${result.id}">
              <figure class="preview__fig">
                <img src="${result.image}" alt="${result.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${result.title}</h4>
                <p class="preview__publisher">${result.publisher}</p>
              </div>
            </a>
          </li>
    `;
  }
}

export default new BookmarksView();
