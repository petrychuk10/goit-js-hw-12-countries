import './styles.css';
import '@pnotify/core/dist/BrightTheme.css';
import lodash from 'lodash';
import fetchCountries from './fetchCountries';

const input = document.querySelector('.js-input');
input.addEventListener(
  'input',
  lodash.debounce(() => {
    fetchCountries(input.value);
  }, 500),
);
