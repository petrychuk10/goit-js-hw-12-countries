import cardTemplate from './tamplate.hbs';

const result = document.querySelector('.result');

export const renderCard = country => {
  result.insertAdjacentHTML('beforeend', cardTemplate(country));
};

export const renderCountryList = countryArr => {
  const countryList = `
  <ul class="countryList">
  ${renderCountryListItem(countryArr)}
  </ul>
  `;
  result.insertAdjacentHTML('beforeend', countryList);
};

const renderCountryListItem = arr =>
  arr.reduce((acc, item) => {
    return (acc += `<li class="countryListItem">${item.name}</li>`);
  }, '');
