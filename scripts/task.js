
const { paintGeolocationData } = require('./geolocation');
const { searchHistory } = require('./searchHistory');
const { getResponse } = require('./responseApi');
const { paintData } = require('./paintData');
const { setElementInHistory } = require('./searchHistory');

const wrap = document.querySelector('.wrapper');
wrap.addEventListener('click', async (e) => {
  if (e.target.closest('.header-button')) {
    if (document.querySelector('.search-history').style.display === 'grid') {
      setElementInHistory(
        await getResponse(document.querySelector('.header-input').value)
      );
      searchHistory();
    } else {
      paintData(
        await getResponse(document.querySelector('.header-input').value)
      );
    }
  }
  if (e.target.closest('.header-button--history')) {
    searchHistory();
  }
});
wrap.addEventListener('keydown', async (e) => {
  if (e.code === 'Enter') {
    paintData(await getResponse(document.querySelector('.header-input').value));
  }
});
paintGeolocationData();
