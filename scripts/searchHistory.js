const format = require('date-fns/format');
const lodash = require('lodash');

function setElementInHistory(element) {
  if (element.error) {
    console.log('Запрос некорректный');
  } else if (localStorage.getItem('history') !== null) {
    const arrHistory = JSON.parse(localStorage.getItem('history'));
    element.dateResponse = format(new Date(), 'MM/dd/E/yyyy');
    arrHistory.unshift(element);
    if (arrHistory.length > 5) {
      arrHistory.length = 5;
    }
    localStorage.setItem('history', JSON.stringify(arrHistory));
  } else {
    const arrHistory = [];
    arrHistory.unshift(element);
    localStorage.setItem('history', JSON.stringify(arrHistory));
  }
}
function showSearchHistory() {
  document.querySelector('.search-history__body').innerHTML = '';
  document.querySelector('.weather').style.display = 'none';
  document.querySelector('.search-history').style.display = 'grid';
  const data = JSON.parse(localStorage.getItem('history'));
  if (data !== [] && data !== null) {
    lodash.forEach(
      data,
      ({ current, dateResponse, location: { name, country } }) => {
        document.querySelector('.search-history__body').insertAdjacentHTML(
          'beforeend',
          `  <ul class="search-history__head">
            <li class="search-item">${name}, ${country}</li>
            <li class="search-item">${current.temperature}&#176С</li>
            <li class="search-item">${current.weather_descriptions[0]}</li>
            <li class="search-item">${current.wind_dir}</li>
            <li class="search-item">${current.wind_speed}</li>
            <li class="search-item">${dateResponse}</li>
        </ul>`
        );
      }
    );
  } else {
    document.querySelector(
      '.search-history__body'
    ).innerHTML = `<h2 class="weather-response">Ваша история поиска пуста</h2>`;
  }
}
function hideSearchHistory() {
  document.querySelector('.search-history').style.display = 'none';
  document.querySelector('.weather').style.display = 'flex';
  document.querySelector('.search-history__body').innerHTML = '';
}
function hui() {
  showSearchHistory();
  document.querySelector('.search-history').addEventListener('click', (e) => {
    if (e.target.closest('.close-history')) {
      hideSearchHistory();
    }
  });
}

module.exports = { setElementInHistory, hui };
